var elixir = require('laravel-elixir')

require('laravel-elixir-vue-2')

elixir(function(mix) {
  mix.webpack('app.js'); // resources/assets/js/app.js
  mix.sass('main.scss', './public/css/main.css', null, { includePaths: [
         './node_modules/bootstrap/dist/css/'
       ] })
  mix.copy('resources/index.html', 'public');
})
