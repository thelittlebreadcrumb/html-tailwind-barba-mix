// 

let mix = require('laravel-mix');
let path = require('path')

mix.setPublicPath(path.resolve('./'));

mix.js("src/app.js", "public/js");

mix.postCss('src/app.css', 'public/css/app.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-focus-visible'),
    require('autoprefixer'),
])

mix.options({
    cssNano: { minifyFontValues: false }
});

mix.browserSync({
    server: './public/',
    files: [
        'src/**/*.html', 
        'src/**/*.css', 
        'public/**/*.(css|js)', 
    ],
    // Option to open in non default OS browser.
    // browser: "firefox",
    notify: true
})

mix.version()