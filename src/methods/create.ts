import fetch from "node-fetch"

type Code = {
    code: string,
    error?: string,
    language?: string,
    title?: string,
    description?: string
}

export default async (file: Code) => {
    let res = await fetch("https://api.srcshare.io/code", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(file)
    }).catch((err) => {
        throw new CreateError(err.message)
    })
    return await res.json()
}

class CreateError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CreateError';
    }
}