const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com', // example in readme file
};

const REPO_NAME_PATH = '/linx/';

function handleRedirect() {
  const pathname = window.location.pathname;
  const key = pathname.includes(REPO_NAME_PATH)
    ? pathname.split(REPO_NAME_PATH).pop()
    : pathname.substring(1);

  console.log({ key });

  redirects.hasOwnProperty(key)
    ? (window.location.href = redirects[key])
    : (window.location.href = '/');
}

window.onload = handleRedirect;
