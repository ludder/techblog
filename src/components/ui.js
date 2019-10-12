import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

const cssLight = css`
  :root {
    --bg-color-code: #fff9ea;
    --border-color-code: #ccc9aa;
    --color-title: #2c4d2e;
  }
  body {
    /* background-color: #18171c; */
    background-color: #efefef;
    color: #111;
  }
`

const cssDark = css`
  :root {
    --bg-color-code: #404;
    --border-color-code: #999;
    --color-title: #88d4ff;
  }
  body {
    background-color: #333;
    color: #ddd;
  }
`

export const GlobalStyles = () => {
  // const localTheme = window.localStorage.getItem('theme');
  // const theme = localTheme
  //   ? localTheme
  //   : window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ? 'dark'
  //   : 'light';
  // window.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  // window.location.reload();

  const styles =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? cssDark
      : cssLight

  return <Global styles={styles} />
}

export const H1 = styled.h1`
  color: var(--color-title);
  margin-bottom: 0;
  margin-top: ${rhythm(1)};
`

export const Par = styled.p`
  display: block;
  font-size: 80%;
  margin-bottom: ${rhythm(1)};
`

export const Article = styled.article`
  h2 {
    color: var(--color-title);
  }
  pre {
    margin-bottom: ${rhythm(1)};
  }
`
