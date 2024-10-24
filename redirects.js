const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com',
};

function handleRedirect() {
  const key = window.location.pathname.split('/link/').pop();

  redirects.hasOwnProperty(key)
    ? (window.location.href = redirects[key])
    : (window.location.href = '/link');
}

window.onload = handleRedirect;
