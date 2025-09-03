const redirects = {
  example: 'https://www.example.com', // example in readme file
  arw: {
    zoom: {
      bishop:
        'https://zoom.us/j/7467106452?pwd=VnNZRWloUWlDaHhTaU5RTk1EZmlZdz09',
      sacrament:
        'https://zoom.us/j/95416464743?pwd=aZByLIv5oKuYUKZrAqdLLEf29kCVv9.1',
    },
  },
  bbq25: 'https://www.facebook.com/events/773654061682877',
  bbq: 'https://www.facebook.com/events/773654061682877',
  picnic: 'https://www.facebook.com/events/798552889314191/',
  // april fools 2025
  'space-news': {
    2025: {
      4: {
        'chuck-e-sedaro':
          'https://zduvall.github.io/space-news-sedaro-april-2025/',
      },
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
