import fetch from "node-fetch"

export default async (file: string) => {
    let res = await fetch(`https://api.srcshare.io/code/id?=${file}`, {
        method: "GET",
    }).catch((err) => {
        throw new GetError(err.message)
    })
    return await res.json()
}

class GetError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GetError';
    }
}