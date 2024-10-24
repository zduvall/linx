# A personal tiny-url creator

Taking advantage of the fact that everything that doesn't end in just `/link/` is redirected to a 404.html, a `key` is retrieved from everything after `/link/` in the url. That key is used to redirect again based on key/value pairs in the js file.
