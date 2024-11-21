const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com', // example in readme file
  aridge: {
    zoom: 'https://zoom.us/j/93256110977?pwd=amFYNzVsMFp5UXo5QzRJRU1HNm14Zz09',
  },
};

function handleRedirect() {
  let redirect;

  console.log('checking for redirect');
  try {
    const pathSegments = window.location.pathname.substring(1).split('/');
    redirect = pathSegments.reduce((acc, pS) => acc[pS], redirects);
  } catch (error) {
    // do nothing
  }
  console.log('here is the link:');
  console.log(redirect);
  console.log('now will redirect');
  setTimeout(() => {
    window.location.href = typeof redirect === 'string' ? redirect : '/';
  }, 1000);
}

window.onload = handleRedirect;
