import fetch from "node-fetch";

type Code = {
    code: string,
    error?: string,
    language?: string,
    title?: string,
    description?: string
}

export default async (file: Code) => {
    if (file.language && file.language === "html")
        file.language = "html/xml";
        
    let res = await fetch("https://api.srcshare.io/code", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(file)
    }).catch((err) => {
        throw new Error(err.message);
    });
    
    const id = await res.json();
    return { url: `https://srcshare.io/?id=${id}`, id };
}