<template>
    <button @click="auth">Authorise</button>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Authorize',

    methods: {
        async auth() {
            let state = null;
            let clientId = 'k7RNYuUbYsS1Rb99qz74DMA1F1NWHUaW2fw5dSE-URI';
            let redirectURI = 'https://peppubuild.netlify.app/';
            let uri = 'https://app.netlify.com/authorize?' +
                'client_id=' + clientId +
                '&response_type=token' +
                '&redirect_uri=' + redirectURI +
                '&state=' + state;
            axios.get(uri);
        }
    }
}
</script>