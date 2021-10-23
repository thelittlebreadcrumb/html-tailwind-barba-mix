const mix = require('laravel-mix');

mix.js("src/app.js", "public/js")
    .postCss('src/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-focus-visible'),
        require('autoprefixer'),
    ])
    .setPublicPath('/').version();