
# sapper-template

The default [Sapper](https://github.com/sveltejs/sapper) template, available for Rollup and webpack.


## Getting started


### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository. Use either the `rollup` or `webpack` branch in `sapper-template`:

```bash
# for Rollup
npx degit "sveltejs/sapper-template#rollup" my-app
# for webpack
npx degit "sveltejs/sapper-template#webpack" my-app
```


### Using GitHub templates

Alternatively, you can use GitHub's template feature with the [sapper-template-rollup](https://github.com/sveltejs/sapper-template-rollup) or [sapper-template-webpack](https://github.com/sveltejs/sapper-template-webpack) repositories.


### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


## Bundler config

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [ZEIT Now](https://zeit.co/now) when using `sapper export`, run these commands:

```bash
npm install -g now
now
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).


## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```


## Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).


<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  <img alt="Gatsby" src="resources/shopify+gatsby.png" height="60px" />
  <br/>
  Gatsby Shopify starter
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d374a159-9ee3-4b02-91a3-ee3053990fcb/deploy-status)](https://app.netlify.com/sites/gatsby-shopify-starter/deploys)

Kick off your next eCommerce experience with this Gatsby starter. It is based on the default Gatsby starter to be easily modifiable. [Demo](https://gatsby-shopify-starter.netlify.com)

This starter also includes credentials to a Shopify demo store so you can try it out immediately without having to start a store. To use your own just change the values inside of `.env`.

If you have questions feel free to message me on [Twitter](https://twitter.com/alexanderhorl) 🤙🏻

Checkout [nureineburg.de](https://nureineburg.de) for a real public shop built with this starter, the code is also [public](https://github.com/AlexanderProd/nureineburg.de/).  

## 💎 Features

- Cart
- Product grid
- Product page
- Dynamic Inventory Checking
- Image optimization with Gatsby Image
- Styled Components with Emotion
- Google Analytics
- SEO

### 📦 Dynamic Inventory Checking
The Shopify product inventory is being checked in realtime, therefore no rebuilding and redeploy is needed when a product goes out of stock. This avoids problems where products could still be available even though they're out of stock due to redeploy delay.

### 🖌 Styling
I'm using [Emotion](https://emotion.sh/docs/introduction) as styled components library, but the starter is purposely only sparsely styled so you don't have to remove unecessary code but can instead add your own styling immediately.

## ⚠️ Common problems

- You need to use the Shopify Storefront API credentials not the regular Shopify API.
- You need to have at least one published product on Shopify.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using this starter
    gatsby new my-shopify-store https://github.com/AlexanderProd/gatsby-shopify-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-shopify-store/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-shopify-store` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Connect your own Shopify store.**

    Open both `.env` files located in the root directory of your page end replace the credentials with your own. Don't forget to restart Gatsby for your store to be loaded!

    ⚠️ Make sure to use the Shopify storefront API credentials, not the regular Shopify API!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Deploy

Checkout my other open-source project [JAMStackBox](https://github.com/AlexanderProd/jam-stack-box) to continuously deploy your Gatsby site on your own server.

## 📌 ToDo

I'll happily merge any pull request to improve the starter. 🙂
- [X] Convert Layout to function component.
- [X] Add dynamic inventory checking to avoid re-building after every purchase. 
- [X] Add better styling.
- [X] Add image optimization using Gatsby sharp plugin.
- [X] Convert ProductForm to function component.
<!-- AUTO-GENERATED-CONTENT:END -->
