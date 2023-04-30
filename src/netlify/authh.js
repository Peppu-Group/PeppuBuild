document.querySelector('#login').addEventListener('click', function () {
    netlifyIdentity.open()
})
netlifyIdentity.on('login', function (user) {
    console.log('hannydevelop')
})