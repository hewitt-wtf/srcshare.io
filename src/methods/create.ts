import fetch from "node-fetch";
import { addParam } from "../utils/addParam";

type Code = {
    code: string,
    error?: string,
    language?: string,
    title?: string,
    description?: string
}

export default async (file: Code) => {
    let uri = "https://api.srcshare.io/code";
    if(file.code) throw new Error("You need to give some code to upload first!")
    if (file.language && file.language === "html")
        file.language = "html/xml";

    if (file.language)
        uri = addParam(uri, "language", file.language);

    if (file.title)
        uri = addParam(uri, "title", file.title);

    if (file.description)
        uri = addParam(uri, "description", file.description);

    let res = await fetch(uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            code: file.code,
            error: file.error
        })
    }).catch((err) => {
        throw new Error(err.message);
    });

    const id = await res.json();
    return { url: `https://srcshare.io/?id=${id}`, id };
}