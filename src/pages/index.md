---
slug: "/"
date: "2020-08-31"
title: "gatsby-remark-image-attributes-demo"
---

## Image without attributes

This demo uses [`gatsby-remark-images`](https://www.gatsbyjs.com/plugins/gatsby-remark-images/).

**Order of plugins in your *gatsby-config.js* matters.** Please add `gatsby-remark-image-attributes` **after** `gatsby-remark-images` or any other image processing plugins!

```
![no attributes](./gatsby-logo.png 'No attributes, here')
```
. ![no attributes](./gatsby-logo.png 'No attributes, here') ![no attributes](./gatsby-logo.png '#this is just a title, too')

## CSS Properties

To use CSS properties like `box-shadow`, add them to the title!

```
![test](./gatsby-logo.png '#box-shadow=0px 0px 10px 2px rgb(2, 2, 2);width=150px')
```
![test](./gatsby-logo.png '#box-shadow=0px 0px 10px 2px rgb(2, 2, 2);width=150px')

---

### Positioning


<div style="border: 1px dashed blue; height: 200px; padding: 14px; position: relative;">
<span style="color: blue;">body</span>
  <div style="position: relative; top: 50px; left: 20px; width: 80%; border: 1px solid darkorange; text-align: center;">
    <div style="text-align: center; padding: 14px 0; color: darkorange;">position: relative</div>
    <div style="text-align: left; width: 50%; padding-left: 5px; padding-bottom: 5px;">Wrapper, after image having been processed by e.g. gatsby-remark-images</div>
    <div style="position: absolute; top: 0; right: 0; border: 3px dotted red; width: 33%; background: rgb(233,233,233);"><span style="display: block; color: #f00;">position: absolute</span>&lt;img&gt; with styleAttributes</div>
`gatsby-remark-image-attributes` wraps the result of other image processing plugins, aiming to reach `body` as the wrapper's [`offsetParent`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent). Your `styleAttributes` will be set on that wrapper, not the `<img>`.
  </div>
  <div style="position: absolute; top: 0; right: 0; border: 3px solid green; padding: 5px; background: rgb(233,233,233);"><span style="display: block; color: #0a0; text-align: center;">position: absolute</span>&lt;img&gt; with styleAttributes on a wrapper &lt;span&gt; around everything</div>
</div>

Compare the [`offsetParent`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)s of these two images to see the difference:

![no-remark-images](./gatsby-logo_no-remark-images.png '#width=32px') ![with-remark-images](./gatsby-logo.png '#width=32px')

This is the ribbon in the upper-right corner of this page:
```
![fork me on github](./fmog.png '#position=absolute;right=0;top=0;width=150px;height=150px')
```
[![fork me on github](./fmog.png '#position=absolute;right=0;top=0;width=150px;height=150px')](https://github.com)

---

### SVG
This plugin generates `<img>` tags and [all browsers support SVG in `<img>` Elements](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics).
```
![svg](./gatsby-logo.svg '#height=150px;filter=hue-rotate(-282deg) brightness(1.5) drop-shadow(2px 4px 6px black)')
```
![svg](./gatsby-logo.svg '#height=150px;filter=hue-rotate(-282deg) brightness(1.5) drop-shadow(2px 4px 6px black);title=Fancy SVG filter effects \o/')

---

### Inline and Lists
```
works ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=text-bottom') inline ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=middle'), too ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=text-top')
```
works ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=text-bottom') inline ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=middle'), too ![gatsby](./gatsby-logo.png '#width=32px;vertical-align=text-top')

```
* or ![gatsby](./gatsby-logo.png'#width=24px;vertical-align=middle')
* in ![gatsby](./gatsby-logo.png '#width=24px;vertical-align=middle;margin-top=10px;margin-bottom=10px')
* lists ![gatsby](./gatsby-logo.png '#width=24px;vertical-align=middle')
```
* or ![gatsby](./gatsby-logo.png '#width=24px;vertical-align=middle')
* in ![gatsby](./gatsby-logo.png '#width=24px;vertical-align=middle;margin-top=10px;margin-bottom=10px')
* lists ![gatsby](./gatsby-logo.png '#width=24px;vertical-align=middle')

---

## data-* attributes

Set the plugin's [`dataAttributes`](https://github.com/rbeer/gatsby-remark-image-attributes#dataattributes) option to `true` to enable data- attributes.

```
![gatsby](./gatsby-logo.png '#some=value with spaces;another=without;width=32px;vertical-align=middle')
```
'Inspect' this Element ⇒ ![gatsby](./gatsby-logo.png '#some=value with spaces;another=without;width=32px;vertical-align=middle') to see `data-some` and `data-another` on it!

_Unlike the [styleAttributes](#positioning), dataAttributes are **always** set on the `<img>` Element, never on the wrapper._

## title="" attribute

### Without image attributes
Titles without `key=value;` pairs behave according to the CommonMark standard; even when they start with a `#`.
```
![no attributes](./gatsby-logo.png '#this is just a title, despite starting with a #')
```
![no attributes](./gatsby-logo.png '#this is just a title, despite starting with a #')

### With image attributes
To add an actual `title=""` attribute to the `<img>`, add an image attribute with `key: title`.

```
![title from attribute](./gatsby-logo.png '#width=64px;title=This has a title from image attributes')
```
![title from attribute](./gatsby-logo.png '#width=64px;title=This has a title from image attributes')
