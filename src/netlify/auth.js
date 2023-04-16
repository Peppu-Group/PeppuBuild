export function auth() {
    redirect();
    handleAccessToken();
}

function redirect() {
    // We don't have access to netlify's server (CORS).
    // We'll redirect to authorisation page, instead of axios.
    let state = null;
    let clientId = 'k7RNYuUbYsS1Rb99qz74DMA1F1NWHUaW2fw5dSE-URI';
    let redirectURI = 'http://127.0.0.1:5173/';
    let uri = 'https://app.netlify.com/authorize?' +
        'client_id=' + clientId +
        '&response_type=token' +
        '&redirect_uri=' + redirectURI +
        '&state=' + state;
    return window.location.href = uri;
}

function handleAccessToken() {
    // The access token is returned in the hash part of the document.location
    // We'll return access token only
  const response = document.location.hash.replace(/^#/, '').split('&').reduce((result, pair) => {
    const keyValue = pair.split('=');
    result[keyValue[0]] = keyValue[1];
    return result;
  }, {});

  // Remove the token so it's not visible in the URL after we're done
  document.location.hash = '';

  if (!localStorage.getItem(response.state)) {
    // We need to verify the random state we set before starting the request,
    // otherwise this could be an access token from someone else than our user
    alert("CSRF Attack");
    return;
  }

  localStorage.removeItem(response.state);

  // Store token in local storage.
  return localStorage.setItem('autoken', response.response.access_token);
}