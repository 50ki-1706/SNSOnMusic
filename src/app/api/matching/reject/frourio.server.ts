import { NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';
import { frourioSpec } from './frourio';
import type { PATCH } from './route';

type RouteChecker = [typeof PATCH];

type SpecType = typeof frourioSpec;

type Controller = {
  patch: (
    req: {
      body: z.infer<SpecType['patch']['body']>;
    },
  ) => Promise<
    | {
        status: 204;
        body: z.infer<SpecType['patch']['res'][204]['body']>;
      }
    | {
        status: 500;
        body: z.infer<SpecType['patch']['res'][500]['body']>;
      }
  >;
};

type MethodHandler = (req: NextRequest | Request) => Promise<NextResponse>;

type ResHandler = {
  PATCH: MethodHandler
};

export const createRoute = (controller: Controller): ResHandler => {
  return {
    PATCH: async (req) => {
      const body = frourioSpec.patch.body.safeParse(await req.json().catch(() => undefined));

      if (body.error) return createReqErr(body.error);

      const res = await controller.patch({ body: body.data });

      switch (res.status) {
        case 204: {
          const body = frourioSpec.patch.res[204].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 204 });
        }
        case 500: {
          const body = frourioSpec.patch.res[500].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 500 });
        }
        default:
          throw new Error(res satisfies never);
      }
    },
  };
};

const createResponse = (body: unknown, init: ResponseInit): NextResponse => {
  if (
    ArrayBuffer.isView(body) ||
    body === undefined ||
    body === null ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    body instanceof FormData ||
    body instanceof ReadableStream ||
    body instanceof URLSearchParams ||
    typeof body === 'string'
  ) {
    return new NextResponse(body, init);
  }

  return NextResponse.json(body, init);
};

type FrourioError =
  | { status: 422; error: string; issues: { path: (string | number)[]; message: string }[] }
  | { status: 500; error: string; issues?: undefined };

const createReqErr = (err: z.ZodError) =>
  NextResponse.json<FrourioError>(
    {
      status: 422,
      error: 'Unprocessable Entity',
      issues: err.issues.map((issue) => ({ path: issue.path, message: issue.message })),
    },
    { status: 422 },
  );

const createResErr = () =>
  NextResponse.json<FrourioError>(
    { status: 500, error: 'Internal Server Error' },
    { status: 500 },
  );
