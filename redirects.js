const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com', // example in readme file
};

function handleRedirect() {
  const key = window.location.pathname.substring(1);

  redirects.hasOwnProperty(key)
    ? (window.location.href = redirects[key])
    : (window.location.href = '/');
}

window.onload = handleRedirect;
