const redirects = {
  'some-other-site': 'https://www.google.com',
  'my-page': 'https://www.example.com',
};

function handleRedirect() {
  // Get the path part of the URL (after /link/)
  console.log(window.location.pathname);
  const path = window.location.pathname.split('/').pop();

  redirects.hasOwnProperty(path)
    ? (window.location.href = redirects[path])
    : (window.location.href = '/link');
}

window.onload = handleRedirect;
