import fetch from "node-fetch";

export default async (file: string) => {
    let res = await fetch(`https://api.srcshare.io/code?id=${file}`, {
        method: "GET",
    }).catch((err) => {
        throw new Error(err.message);
    });
    return await res.json();
};
