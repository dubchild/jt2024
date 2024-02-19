---
layout: ../layouts/AboutLayout.astro
title: "More About Me"
---

Formally trained as a web designer, career momentum increasingly pushed me into more front-end developer roles, but I have always considered myself a designer that codes by necessity. Getting promoted to "Digital Product Designer" at SDI in 2016 was easily the most rewarding position I have had due to the freedom I was given to explore UI and UX concepts. 

For the last few years I've pursued my interests in designing and making physical products. The case studies presented here show that I'm ready to step into a full-time product design role. I'm always looking for new challenges, so feel free to reach out if you have any questions or want to collaborate.

 
<!-- delete below after placing images -->
<div class="size-full bg-black h-40 flex items-center justify-center text-white">
 [ image slot ]<!-- <img src="/assets/dev.svg" class="sm:w-1/2 mx-auto" alt="coding dev illustration"> -->
</div>
<!-- <div>
  <img src="/assets/dev.svg" class="sm:w-1/2 mx-auto" alt="coding dev illustration">
</div> -->

## Tech Stack

This site has been updated to Astro.js 4.0! It is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog and page content. The site is fast AF and scores 100 on Google Lighthouse.

## Features

Here are certain features of this site.

- fully responsive and accessible
- SEO-friendly
- light & dark mode
- fuzzy search
- super fast performance
- draft posts
- pagination
- sitemap & rss feed
- highly customizable

If you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  
Or you can even give any feedback via my [email](mailto:contact@satnaing.dev).


// astro.config.mjs
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  // Order matters here!  `sentry()` should come before `spotlightjs()`
  integrations: [sentry(), spotlightjs()],
});