# vite-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Build Optimizations

The build process has been optimized to include asset compression using `vite-plugin-compression`. This helps in reducing the size of the assets and improves the loading time of the application.

To enable this optimization, the `vite.config.js` file has been updated to include the `vite-plugin-compression` plugin.

Additionally, the GitHub Actions workflow has been updated to include caching for `node_modules`, which speeds up the build process by reusing previously installed dependencies.
