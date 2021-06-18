export function addParam(uri: string, param: string, value: string): string {
    if (uri.includes("?"))
        uri += "&";
    else
        uri += "?";

    uri += `${param}=${encodeURIComponent(value)}`;
    return uri;
}