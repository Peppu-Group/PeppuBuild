export async function auth() {
  redirect()
}

function redirect() {
  // We don't have access to netlify's server (CORS).
  // We'll redirect to authorisation page, instead of axios.
  let state = null
  state = Math.random()
  localStorage.setItem(state, true)
  let clientId = 'k7RNYuUbYsS1Rb99qz74DMA1F1NWHUaW2fw5dSE-URI'
  let redirectURI = 'http://127.0.0.1:5173/callback'
  let uri =
    'https://app.netlify.com/authorize?' +
    'client_id=' +
    clientId +
    '&response_type=token' +
    '&redirect_uri=' +
    redirectURI +
    '&state=' +
    state
  window.location.href = uri
}
