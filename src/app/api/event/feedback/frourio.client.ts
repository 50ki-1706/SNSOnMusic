import type { FrourioClientOption } from '@frourio/next';
import { z } from 'zod';
import { frourioSpec as frourioSpec_1b1jnsd } from './frourio'

export const fc = (option?: FrourioClientOption) => ({
  $url: $url_1b1jnsd(option),
  ...methods_1b1jnsd(option),
});

export const $fc = (option?: FrourioClientOption) => ({
  $url: {
    patch(): string {
      const result = $url_1b1jnsd(option).patch();

      if (!result.isValid) throw result.reason;

      return result.data;
    },
  },
  async $patch(req: Parameters<ReturnType<typeof methods_1b1jnsd>['$patch']>[0]): Promise<z.infer<typeof frourioSpec_1b1jnsd.patch.res[204]['body']>> {
    const result = await methods_1b1jnsd(option).$patch(req);

    if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

    if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
  },
});

export const fc_1b1jnsd = fc;

export const $fc_1b1jnsd = $fc;

const $url_1b1jnsd = (option?: FrourioClientOption) => ({
  patch(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/event/feedback` };
  },
});

const methods_1b1jnsd = (option?: FrourioClientOption) => ({
  async $patch(req: { body: z.infer<typeof frourioSpec_1b1jnsd.patch.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 204; headers?: undefined; body: z.infer<typeof frourioSpec_1b1jnsd.patch.res[204]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1b1jnsd.patch.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1b1jnsd(option).patch();

    if (url.reason) return url;

    const parsedBody = frourioSpec_1b1jnsd.patch.body.safeParse(req.body);

    if (!parsedBody.success) return { isValid: false, reason: parsedBody.error };

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'PATCH',
        ...option?.init,
        body: JSON.stringify(parsedBody.data),
        ...req.init,
        headers: { ...option?.init?.headers, 'content-type': 'application/json', ...req.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 204: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_1b1jnsd.patch.res[204].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 204, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec_1b1jnsd.patch.res[500].body.safeParse(resBody.data);

        if (!body.success) return { ok: false, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: false,
          isValid: true,
          failure: { status: 500, body: body.data },
          raw: result.res,
        };
      }
      default:
        return { ok: result.res.ok, raw: result.res, error: new Error(`Unknown status: ${result.res.status}`) };
    }
  },
});

