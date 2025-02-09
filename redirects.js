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

/**
 * Redirects based on the URL path, using predefined redirects object. If no
 * redirect is found, redirects to root.
 */
function handleRedirect() {
  let redirect = '/';

  const pathSegments = window.location.pathname.slice(1).split('/');
  try {
    redirect =
      pathSegments.reduce((acc, segment) => acc?.[segment], redirects) ??
      redirect;
  } catch (error) {
    // console.error('Error during redirect:', error);
  }
  window.location.href = redirect;
}

window.onload = handleRedirect;
