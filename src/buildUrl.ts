export declare type QueryParams = { [key: string]: string | number };
export declare type UrlParams = {
  path?: string;
  queryParams?: {
    [key: string]: string | number;
  };
};

export default function buildUrl(baseUrl: string, params?: UrlParams) {
  let finalUrl = baseUrl;
  if (params?.path) {
    const path = !params.path.trim().startsWith('/') ? `/${params.path.trim()}` : params.path.trim();
    finalUrl += path;
  }
  if (params?.queryParams) {
    if (!finalUrl.endsWith('?')) finalUrl += '?';
    for (const key in params.queryParams) {
      finalUrl += `${key}=${params.queryParams[key]}&`;
    }
    finalUrl = finalUrl.slice(0, finalUrl.length - 1);
  }
  finalUrl = finalUrl.replace(/(?<!\S*:)\/{2}/gm, '/');
  return encodeURI(finalUrl);
}

export { buildUrl };
