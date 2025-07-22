import type { FrourioClientOption } from '@frourio/next';
import { z } from 'zod';
import { frourioSpec as frourioSpec_z4r8kd } from './event/frourio';
import { frourioSpec as frourioSpec_g52im } from './matching/like/frourio';
import { frourioSpec as frourioSpec_1wayw5l } from './matching/reciveList/frourio';
import { frourioSpec as frourioSpec_1i3eve6 } from './matching/reject/frourio';
import { frourioSpec as frourioSpec_1lso0e7 } from './matching/sendLIst/frourio';
import { frourioSpec as frourioSpec_1md8b19 } from './matching/submit/frourio';
import { frourioSpec as frourioSpec_1vv65m8 } from './profile/frourio';
import { frourioSpec as frourioSpec_36xt6y } from './frourio'

export const fc = (option?: FrourioClientOption) => ({
  'event': {
    $url: $url_z4r8kd(option),
    $build(req: Parameters<ReturnType<typeof methods_z4r8kd>['$get']>[0] | null): [
      key: { lowLevel: true; baseURL: FrourioClientOption['baseURL']; dir: string } & Omit<Parameters<ReturnType<typeof methods_z4r8kd>['$get']>[0], 'init'> | null,
      fetcher: () => Promise<NonNullable<Awaited<ReturnType<ReturnType<typeof methods_z4r8kd>['$get']>>>>,
    ] {
      if (req === null) return [null, () => Promise.reject(new Error('Fetcher is disabled.'))];

      const { init, ...rest } = req;

      return [{ lowLevel: true, baseURL: option?.baseURL, dir: '/api/event', ...rest }, () => methods_z4r8kd(option).$get(req)];
    },
    ...methods_z4r8kd(option),
  },
  'matching/like': {
    $url: $url_g52im(option),
    ...methods_g52im(option),
  },
  'matching/reciveList': {
    $url: $url_1wayw5l(option),
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: true; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<NonNullable<Awaited<ReturnType<ReturnType<typeof methods_1wayw5l>['$get']>>>>,
    ] {
      return [{ lowLevel: true, baseURL: option?.baseURL, dir: '/api/matching/reciveList' }, () => methods_1wayw5l(option).$get(req)];
    },
    ...methods_1wayw5l(option),
  },
  'matching/reject': {
    $url: $url_1i3eve6(option),
    ...methods_1i3eve6(option),
  },
  'matching/sendLIst': {
    $url: $url_1lso0e7(option),
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: true; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<NonNullable<Awaited<ReturnType<ReturnType<typeof methods_1lso0e7>['$get']>>>>,
    ] {
      return [{ lowLevel: true, baseURL: option?.baseURL, dir: '/api/matching/sendLIst' }, () => methods_1lso0e7(option).$get(req)];
    },
    ...methods_1lso0e7(option),
  },
  'matching/submit': {
    $url: $url_1md8b19(option),
    ...methods_1md8b19(option),
  },
  'profile': {
    $url: $url_1vv65m8(option),
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: true; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<NonNullable<Awaited<ReturnType<ReturnType<typeof methods_1vv65m8>['$get']>>>>,
    ] {
      return [{ lowLevel: true, baseURL: option?.baseURL, dir: '/api/profile' }, () => methods_1vv65m8(option).$get(req)];
    },
    ...methods_1vv65m8(option),
  },
  $url: $url_36xt6y(option),
  $build(req?: { init?: RequestInit }): [
    key: { lowLevel: true; baseURL: FrourioClientOption['baseURL']; dir: string },
    fetcher: () => Promise<NonNullable<Awaited<ReturnType<ReturnType<typeof methods_36xt6y>['$get']>>>>,
  ] {
    return [{ lowLevel: true, baseURL: option?.baseURL, dir: '/api' }, () => methods_36xt6y(option).$get(req)];
  },
  ...methods_36xt6y(option),
});

export const $fc = (option?: FrourioClientOption) => ({
  'event': {
    $url: {
      get(req: Parameters<ReturnType<typeof $url_z4r8kd>['get']>[0]): string {
        const result = $url_z4r8kd(option).get(req);

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    $build(req: Parameters<ReturnType<typeof methods_z4r8kd>['$get']>[0] | null): [
      key: { lowLevel: false; baseURL: FrourioClientOption['baseURL']; dir: string } & Omit<Parameters<ReturnType<typeof methods_z4r8kd>['$get']>[0], 'init'> | null,
      fetcher: () => Promise<z.infer<typeof frourioSpec_z4r8kd.get.res[200]['body']>>,
    ] {
      if (req === null) return [null, () => Promise.reject(new Error('Fetcher is disabled.'))];

      const { init, ...rest } = req;

      return [{ lowLevel: false, baseURL: option?.baseURL, dir: '/api/event', ...rest }, () => $fc(option)['event'].$get(req)];
    },
    async $get(req: Parameters<ReturnType<typeof methods_z4r8kd>['$get']>[0]): Promise<z.infer<typeof frourioSpec_z4r8kd.get.res[200]['body']>> {
      const result = await methods_z4r8kd(option).$get(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'matching/like': {
    $url: {
      patch(): string {
        const result = $url_g52im(option).patch();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    async $patch(req: Parameters<ReturnType<typeof methods_g52im>['$patch']>[0]): Promise<z.infer<typeof frourioSpec_g52im.patch.res[204]['body']>> {
      const result = await methods_g52im(option).$patch(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'matching/reciveList': {
    $url: {
      get(): string {
        const result = $url_1wayw5l(option).get();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: false; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<z.infer<typeof frourioSpec_1wayw5l.get.res[200]['body']>>,
    ] {
      return [{ lowLevel: false, baseURL: option?.baseURL, dir: '/api/matching/reciveList' }, () => $fc(option)['matching/reciveList'].$get(req)];
    },
    async $get(req?: Parameters<ReturnType<typeof methods_1wayw5l>['$get']>[0]): Promise<z.infer<typeof frourioSpec_1wayw5l.get.res[200]['body']>> {
      const result = await methods_1wayw5l(option).$get(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'matching/reject': {
    $url: {
      patch(): string {
        const result = $url_1i3eve6(option).patch();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    async $patch(req: Parameters<ReturnType<typeof methods_1i3eve6>['$patch']>[0]): Promise<z.infer<typeof frourioSpec_1i3eve6.patch.res[204]['body']>> {
      const result = await methods_1i3eve6(option).$patch(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'matching/sendLIst': {
    $url: {
      get(): string {
        const result = $url_1lso0e7(option).get();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: false; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<z.infer<typeof frourioSpec_1lso0e7.get.res[200]['body']>>,
    ] {
      return [{ lowLevel: false, baseURL: option?.baseURL, dir: '/api/matching/sendLIst' }, () => $fc(option)['matching/sendLIst'].$get(req)];
    },
    async $get(req?: Parameters<ReturnType<typeof methods_1lso0e7>['$get']>[0]): Promise<z.infer<typeof frourioSpec_1lso0e7.get.res[200]['body']>> {
      const result = await methods_1lso0e7(option).$get(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'matching/submit': {
    $url: {
      post(): string {
        const result = $url_1md8b19(option).post();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    async $post(req: Parameters<ReturnType<typeof methods_1md8b19>['$post']>[0]): Promise<z.infer<typeof frourioSpec_1md8b19.post.res[204]['body']>> {
      const result = await methods_1md8b19(option).$post(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  'profile': {
    $url: {
      get(): string {
        const result = $url_1vv65m8(option).get();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
      patch(): string {
        const result = $url_1vv65m8(option).patch();

        if (!result.isValid) throw result.reason;

        return result.data;
      },
    },
    $build(req?: { init?: RequestInit }): [
      key: { lowLevel: false; baseURL: FrourioClientOption['baseURL']; dir: string },
      fetcher: () => Promise<z.infer<typeof frourioSpec_1vv65m8.get.res[200]['body']>>,
    ] {
      return [{ lowLevel: false, baseURL: option?.baseURL, dir: '/api/profile' }, () => $fc(option)['profile'].$get(req)];
    },
    async $get(req?: Parameters<ReturnType<typeof methods_1vv65m8>['$get']>[0]): Promise<z.infer<typeof frourioSpec_1vv65m8.get.res[200]['body']>> {
      const result = await methods_1vv65m8(option).$get(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
    async $patch(req: Parameters<ReturnType<typeof methods_1vv65m8>['$patch']>[0]): Promise<z.infer<typeof frourioSpec_1vv65m8.patch.res[204]['body']>> {
      const result = await methods_1vv65m8(option).$patch(req);

      if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

      if (!result.ok) throw new Error(`HTTP Error: ${result.failure.status}`);

    return result.data.body;
    },
  },
  $url: {
    get(): string {
      const result = $url_36xt6y(option).get();

      if (!result.isValid) throw result.reason;

      return result.data;
    },
  },
  $build(req?: { init?: RequestInit }): [
    key: { lowLevel: false; baseURL: FrourioClientOption['baseURL']; dir: string },
    fetcher: () => Promise<z.infer<typeof frourioSpec_36xt6y.get.res[200]['body']>>,
  ] {
    return [{ lowLevel: false, baseURL: option?.baseURL, dir: '/api' }, () => $fc(option).$get(req)];
  },
  async $get(req?: Parameters<ReturnType<typeof methods_36xt6y>['$get']>[0]): Promise<z.infer<typeof frourioSpec_36xt6y.get.res[200]['body']>> {
    const result = await methods_36xt6y(option).$get(req);

    if (!result.isValid) throw result.isValid === false ? result.reason : result.error;

    return result.data.body;
  },
});

export const fc_36xt6y = fc;

export const $fc_36xt6y = $fc;

const $url_36xt6y = (option?: FrourioClientOption) => ({
  get(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api` };
  },
});

const $url_z4r8kd = (option?: FrourioClientOption) => ({
  get(req: { query: z.infer<typeof frourioSpec_z4r8kd.get.query> }): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    const parsedQuery = frourioSpec_z4r8kd.get.query.safeParse(req.query);

    if (!parsedQuery.success) return { isValid: false, reason: parsedQuery.error };

    const searchParams = new URLSearchParams();

    Object.entries(parsedQuery.data).forEach(([key, value]) => {
      if (value === undefined) return;

      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, item.toString()));
      } else {
        searchParams.append(key, value.toString());
      }
    });

    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/event?${searchParams.toString()}` };
  },
});

const $url_g52im = (option?: FrourioClientOption) => ({
  patch(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/matching/like` };
  },
});

const $url_1wayw5l = (option?: FrourioClientOption) => ({
  get(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/matching/reciveList` };
  },
});

const $url_1i3eve6 = (option?: FrourioClientOption) => ({
  patch(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/matching/reject` };
  },
});

const $url_1lso0e7 = (option?: FrourioClientOption) => ({
  get(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/matching/sendLIst` };
  },
});

const $url_1md8b19 = (option?: FrourioClientOption) => ({
  post(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/matching/submit` };
  },
});

const $url_1vv65m8 = (option?: FrourioClientOption) => ({
  get(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/profile` };
  },
  patch(): { isValid: true; data: string; reason?: undefined } | { isValid: false, data?: undefined; reason: z.ZodError } {
    return { isValid: true, data: `${option?.baseURL?.replace(/\/$/, '') ?? ''}/api/profile` };
  },
});

const methods_36xt6y = (option?: FrourioClientOption) => ({
  async $get(req?: { init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec_36xt6y.get.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_36xt6y(option).get();

    if (url.reason) return url;

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'GET',
        ...option?.init,
        ...req?.init,
        headers: { ...option?.init?.headers, ...req?.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_36xt6y.get.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      default:
        return { ok: result.res.ok, raw: result.res, error: new Error(`Unknown status: ${result.res.status}`) };
    }
  },
});

const methods_z4r8kd = (option?: FrourioClientOption) => ({
  async $get(req: { query: z.infer<typeof frourioSpec_z4r8kd.get.query>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec_z4r8kd.get.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_z4r8kd.get.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_z4r8kd(option).get(req);

    if (url.reason) return url;

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'GET',
        ...option?.init,
        ...req.init,
        headers: { ...option?.init?.headers, ...req.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_z4r8kd.get.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec_z4r8kd.get.res[500].body.safeParse(resBody.data);

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

const methods_g52im = (option?: FrourioClientOption) => ({
  async $patch(req: { body: z.infer<typeof frourioSpec_g52im.patch.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 204; headers?: undefined; body: z.infer<typeof frourioSpec_g52im.patch.res[204]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_g52im.patch.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_g52im(option).patch();

    if (url.reason) return url;

    const parsedBody = frourioSpec_g52im.patch.body.safeParse(req.body);

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

        const body = frourioSpec_g52im.patch.res[204].body.safeParse(resBody.data);

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

        const body = frourioSpec_g52im.patch.res[500].body.safeParse(resBody.data);

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

const methods_1wayw5l = (option?: FrourioClientOption) => ({
  async $get(req?: { init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec_1wayw5l.get.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1wayw5l.get.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1wayw5l(option).get();

    if (url.reason) return url;

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'GET',
        ...option?.init,
        ...req?.init,
        headers: { ...option?.init?.headers, ...req?.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_1wayw5l.get.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec_1wayw5l.get.res[500].body.safeParse(resBody.data);

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

const methods_1i3eve6 = (option?: FrourioClientOption) => ({
  async $patch(req: { body: z.infer<typeof frourioSpec_1i3eve6.patch.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 204; headers?: undefined; body: z.infer<typeof frourioSpec_1i3eve6.patch.res[204]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1i3eve6.patch.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1i3eve6(option).patch();

    if (url.reason) return url;

    const parsedBody = frourioSpec_1i3eve6.patch.body.safeParse(req.body);

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

        const body = frourioSpec_1i3eve6.patch.res[204].body.safeParse(resBody.data);

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

        const body = frourioSpec_1i3eve6.patch.res[500].body.safeParse(resBody.data);

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

const methods_1lso0e7 = (option?: FrourioClientOption) => ({
  async $get(req?: { init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec_1lso0e7.get.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1lso0e7.get.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1lso0e7(option).get();

    if (url.reason) return url;

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'GET',
        ...option?.init,
        ...req?.init,
        headers: { ...option?.init?.headers, ...req?.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_1lso0e7.get.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec_1lso0e7.get.res[500].body.safeParse(resBody.data);

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

const methods_1md8b19 = (option?: FrourioClientOption) => ({
  async $post(req: { body: z.infer<typeof frourioSpec_1md8b19.post.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 204; headers?: undefined; body: z.infer<typeof frourioSpec_1md8b19.post.res[204]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1md8b19.post.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1md8b19(option).post();

    if (url.reason) return url;

    const parsedBody = frourioSpec_1md8b19.post.body.safeParse(req.body);

    if (!parsedBody.success) return { isValid: false, reason: parsedBody.error };

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'POST',
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

        const body = frourioSpec_1md8b19.post.res[204].body.safeParse(resBody.data);

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

        const body = frourioSpec_1md8b19.post.res[500].body.safeParse(resBody.data);

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

const methods_1vv65m8 = (option?: FrourioClientOption) => ({
  async $get(req?: { init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 200; headers?: undefined; body: z.infer<typeof frourioSpec_1vv65m8.get.res[200]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1vv65m8.get.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1vv65m8(option).get();

    if (url.reason) return url;

    const fetchFn = option?.fetch ?? fetch;
    const result: { success: true; res: Response } | { success: false; error: unknown } = await fetchFn(
      url.data,
      {
        method: 'GET',
        ...option?.init,
        ...req?.init,
        headers: { ...option?.init?.headers, ...req?.init?.headers },
      }
    ).then(res => ({ success: true, res } as const)).catch(error => ({ success: false, error }));

    if (!result.success) return { error: result.error };

    switch (result.res.status) {
      case 200: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: true, raw: result.res, error: resBody.error };

        const body = frourioSpec_1vv65m8.get.res[200].body.safeParse(resBody.data);

        if (!body.success) return { ok: true, isValid: false, raw: result.res, reason: body.error };

        return {
          ok: true,
          isValid: true,
          data: { status: 200, body: body.data },
          raw: result.res,
        };
      }
      case 500: {
        const resBody: { success: true; data: unknown } | { success: false; error: unknown } = await result.res.json().then(data => ({ success: true, data } as const)).catch(error => ({ success: false, error }));

        if (!resBody.success) return { ok: false, raw: result.res, error: resBody.error };

        const body = frourioSpec_1vv65m8.get.res[500].body.safeParse(resBody.data);

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
  async $patch(req: { body: z.infer<typeof frourioSpec_1vv65m8.patch.body>, init?: RequestInit }): Promise<
    | { ok: true; isValid: true; data: { status: 204; headers?: undefined; body: z.infer<typeof frourioSpec_1vv65m8.patch.res[204]['body']> }; failure?: undefined; raw: Response; reason?: undefined; error?: undefined }
    | { ok: false; isValid: true; data?: undefined; failure: { status: 500; headers?: undefined; body: z.infer<typeof frourioSpec_1vv65m8.patch.res[500]['body']> }; raw: Response; reason?: undefined; error?: undefined }
    | { ok: boolean; isValid: false; data?: undefined; failure?: undefined; raw: Response; reason: z.ZodError; error?: undefined }
    | { ok: boolean; isValid?: undefined; data?: undefined; failure?: undefined; raw: Response; reason?: undefined; error: unknown }
    | { ok?: undefined; isValid: false; data?: undefined; failure?: undefined; raw?: undefined; reason: z.ZodError; error?: undefined }
    | { ok?: undefined; isValid?: undefined; data?: undefined; failure?: undefined; raw?: undefined; reason?: undefined; error: unknown }
  > {
    const url = $url_1vv65m8(option).patch();

    if (url.reason) return url;

    const parsedBody = frourioSpec_1vv65m8.patch.body.safeParse(req.body);

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

        const body = frourioSpec_1vv65m8.patch.res[204].body.safeParse(resBody.data);

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

        const body = frourioSpec_1vv65m8.patch.res[500].body.safeParse(resBody.data);

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

