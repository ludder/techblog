---
title: Next.js API routes with external api calls
date: "2020-07-11T10:07:54.527Z"
description: How to call an external api with Axios from a Next.js api route.
---

Example of an API route in `pages/api/swapi.js`:

```js
import axios from "axios"

export default async (req, res) => {
  const url = `https://swapi.dev/api/people/1`

  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
```

Example of a reusable hook with [swr](https://swr.vercel.app/) to call your api route. This hook can then be used in your Next.js pages:

```js
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export function useSwapi() {
  const { data, error } = useSWR(`/api/swapi`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
```

Why not calling the swapi api directly from the client? In this case that would be perfectly OK. However, I use api routes this way when I need to add extra info to the external api call, like an authorization header.
