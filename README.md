# @hk223/srcshare.io

The unofficial API Wrapper for srcshare.io.

# Installation

```bash
npm i @hk223/srcshare.io
```

# Creating a Bin

```js
const srcshare = require("@hk223/srcshare.io");
const bin = await srcshare.create({
    code: "hello world",
    error: "bad error",
    title: "my code",
    description: "my code here is the best code",
});
console.log(`Code can be found here: ${bin.url}`);
```

# Getting a Bin

```js
const srcshare = require("@hk223/srcshare.io");
const bin = await srcshare.get("60cabbbc0b940faba40988ff");
console.log(bin);
```

# FAQ

-   Can I add a language when posting?
    -   Done

# Support

-   Join the [discord](https://discord.gg/h3rm39Uerx)
