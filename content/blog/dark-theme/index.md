---
title: Create a dark theme with minimal coding
date: "2019-10-12T10:07:54.527Z"
description: What is the minimal code you need to create a dark theme for your website that listens to the dark mode setting of your OS as well offers an option for your website to opt-out?
---

## Media queries are simple and effective, but less generic

The easiest way for adding a dark theme to your site is putting the specific styles inside the following media query:

```css
@media (prefers-color-scheme: dark) {
  background-color: #333;
  color: #efefef;
}
```

## Create a light and a dark stylesheet

However, in most cases it's better to create different stylesheets and load just the light or the dark theme based on settings. How to load the selected stylesheet really depends on your project setup.

Use CSS variables for the styles that depend on the color theme.

Example `styles-light.css`:

```css
:root {
  --bg-color-main: #333;
  --color-main: #efefef;
}
```

Example `styles-dark.css`:

```css
:root {
  --bg-color-main: #efefef;
  --color-main: #333;
}
```

Then use these variables in your module stylesheets:

```css
.module-card {
  background-color: --bg-color-main;
  color: --color-main;
}
```

## Switch between light and dark

Add a button, link or whatever to the HTML of your site to switch between the light and the dark stylesheet:

```html
<button id="theme-switcher">Change theme</button>
```

Corresponding JavaScript:

```js
document.getElementById("theme-switcher").addEventListener("click", () => {
  const localTheme = window.localStorage.getItem("theme")
  const theme = localTheme
    ? localTheme
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
  window.localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  window.location.reload()
})
```

And you're done, happy theming!
