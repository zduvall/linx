# A personal tiny-url creator

Taking advantage of the fact that everything that doesn't end in just `/{repoName}/` is redirected to a 404.html, a `key` is retrieved from everything after `/{repoName}/` in the url. That key is used to redirect again based on key/value pairs in the js file.

As an example, visit [zduvall.github.io/linx/example](https://zduvall.github.io/linx/example) to be redirected to [https://www.example.com/](https://www.example.com/)

Note: github does not redirect to the 404 page if there is more than one path segment after the repo name.
