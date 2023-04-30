

netlifyIdentity.on('login', function(user) {
    document.querySelector('#login').innerHTML = 'Log Out'
    window.location = '../';
})