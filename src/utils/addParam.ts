export function addParam(uri: string, param: string, value: string): string {
    uri.includes("?") ? uri += "&" : uri += "?";
    uri += `${param}=${encodeURIComponent(value)}`;

    return uri;
}