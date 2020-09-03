---
slug: "/"
date: "2020-08-31"
title: "gatsby-remark-image-attributes-demo"
---

## Image without attributes

```
![no attributes](./gatsby-logo.png)
```
![no attributes](./gatsby-logo.png)

The path to the image will almost always be `./gatsby-logo.png` and replaced with `...`.

## Image with styleAttributes

```
![test](...#width=200px;height=100px)
```
![test](./gatsby-logo.png#width=200px;height=100px)

---

```
![test](...#box-shadow=0px 0px 10px 2px rgb(2, 2, 2))
```
![test](./gatsby-logo.png#box-shadow=0px 0px 10px 2px rgb(2, 2, 2))

This requires `box-shadow` to be declared in or [`styleAttributes`](https://github.com/rbeer/gatsby-remark-image-attributes#styleattributes) itself set to `true`.

---

```
![fork me on github](https://aral.github.io/fork-me-on-github-retina-ribbons/right-white@2x.png#position=fixed;right=0;top=0;width=150px;height=150px)
```
[![fork me on github](https://aral.github.io/fork-me-on-github-retina-ribbons/right-white@2x.png#position=fixed;right=0;top=0;width=150px;height=150px)](https://github.com)

The one in the upper-right corner of this page :)

---

Use CSS functions like filters on SVGs:

```
![svg](./gatsby-logo.svg#height=150px;filter=hue-rotate(-282deg) brightness(1.5) drop-shadow(2px 4px 6px black))
```
![svg](./gatsby-logo.svg#height=150px;filter=hue-rotate(-282deg) brightness(1.5) drop-shadow(2px 4px 6px black))

---

```
### works ![gatsby](./gatsby-logo.png#width=32px;vertial-align=text-bottom) inline ![gatsby](./gatsby-logo.png#width=32px;vertical-align=middle), too ![gatsby](./gatsby-logo.png#width=32px;vertical-align=text-top)
```
### works ![gatsby](./gatsby-logo.png#width=32px;vertial-align=text-bottom) inline ![gatsby](./gatsby-logo.png#width=32px;vertical-align=middle), too ![gatsby](./gatsby-logo.png#width=32px;vertical-align=text-top)

```
* or ![gatsby](...#width=24px;vertical-align=middle)
* in ![gatsby](...#width=24px;vertical-align=middle;margin-top=10px;margin-bottom=10px)
* lists ![gatsby](...#width=24px;vertical-align=middle)
```
* or ![gatsby](./gatsby-logo.png#width=24px;vertical-align=middle)
* in ![gatsby](./gatsby-logo.png#width=24px;vertical-align=middle;margin-top=10px;margin-bottom=10px)
* lists ![gatsby](./gatsby-logo.png#width=24px;vertical-align=middle)

---

## Images with data- attributes

Set [`dataAttributes`](https://github.com/rbeer/gatsby-remark-image-attributes#dataattributes) to `true` to enable data- attributes.

```
![gatsby](./gatsby-logo.png#some=value with spaces;another=without;width=32px;vertical-align=middle)
```
![gatsby](./gatsby-logo.png#some=value with spaces;another=without;width=32px;vertical-align=middle)
⇐ 'Inspect' this Element to see `data-some` and `data-another` on it!
