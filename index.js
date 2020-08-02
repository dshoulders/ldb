const { PurgeCSS } = require('purgecss');

(async () => {
    const purgeCSSResult = await new PurgeCSS().purge({
        content: ['/public/index.html'],
        css: ['/static/css/site.css'],
        output: '/',
    })
})()
