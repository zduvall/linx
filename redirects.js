const redirects = {
  example: 'https://www.example.com', // example in readme file
  aridge: {
    zoom: {
      bishop:
        'https://zoom.us/j/93256110977?pwd=amFYNzVsMFp5UXo5QzRJRU1HNm14Zz09',
      sacrament:
        'https://zoom.us/j/98343221894?pwd=ci9BVGpEM0xKdEtpbTN0cW5xWWVOdz09',
    },
  },
};

function handleRedirect() {
  let redirect;
  try {
    const pathSegments = window.location.pathname.substring(1).split('/');
    redirect = pathSegments.reduce((acc, pS) => acc[pS], redirects);
  } catch (error) {
    // do nothing
  }
  window.location.href = typeof redirect === 'string' ? redirect : '/';
}

window.onload = handleRedirect;
