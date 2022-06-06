import fetch from 'node-fetch'
import { addParam } from '../utils/addParam'
import languages from '../utils/languages'

type language = typeof languages[number] // Create a union string literal type from the array.

type Code = {
    code: string
    error?: string
    language?: language
    title?: string
    description?: string
}

let uri = 'https://api.srcshare.io/code'

export default async (file: Code) => {
    handleParams(file)

    let res = await sendRequest(file)

    const id = await res.json()
    return { url: `https://srcshare.io/?id=${id}`, id }
}

function handleParams (file: Code) {
    if (!file) throw new Error('You have to pass in an object!')
    if (!file.code)
        throw new Error('You need to give some code to upload first!')

    for (const param in file) {
        // Ignoring code and error since they are sent in the body of the request.
        if (param === 'code' || param === 'error') continue
        if (file.hasOwnProperty(param)) {
            addParam(uri, param, file[param])
        }
    }
}

async function sendRequest (file: Code) {
    return await fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            code: file.code,
            error: file.error
        })
    }).catch(err => {
        throw new Error(err.message)
    })
}
