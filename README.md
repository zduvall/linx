# A personal tiny-url creator

Taking advantage of the fact that everything that doesn't end in just `/{repoName}/` is redirected to a 404.html, a `key` is retrieved from everything after `/{repoName}/` in the url. That key is used to redirect again based on key/value pairs in the js file.

As an example, visit [zduvall.github.io/l/e](https://zduvall.github.io/l/e)
