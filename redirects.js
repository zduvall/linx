const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com', // example in readme file
};

const REPO_NAME_PATH = '/l/';

function handleRedirect() {
  const key = window.location.pathname.split(REPO_NAME_PATH).pop();

  redirects.hasOwnProperty(key)
    ? (window.location.href = redirects[key])
    : (window.location.href = REPO_NAME_PATH);
}

window.onload = handleRedirect;
