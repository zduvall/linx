const redirects = {
  g: 'https://www.google.com',
  e: 'https://www.example.com', // example in readme file
  aridge: {
    zoom: 'https://zoom.us/j/93256110977?pwd=amFYNzVsMFp5UXo5QzRJRU1HNm14Zz09',
  },
};

function handleRedirect() {
  try {
    const pathSegments = window.location.pathname.substring(1).split('/');
    window.location.href = pathSegments.reduce((acc, pS) => acc[pS], redirects);
  } catch (error) {
    window.location.href = '/';
  }
}

window.onload = handleRedirect;
