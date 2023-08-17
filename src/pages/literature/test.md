---
layout: /src/layouts/main.astro
title: My Blog Post
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
draft: false
---

This is my in-progress blog post.

No page will be **built** for this post.

To build and publish this post:

- update the frontmatter to `draft: false` or
- remove the `draft` property entirely.

But, this page _will_ be returned by any matching `Astro.glob()` request.