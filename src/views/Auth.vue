<template>
    <body id="iljx">
        <div class="background">
            <div class="gjs-row" id="iys7">
                <div class="gjs-cell" id="id2x">
                </div>
            </div>
            <div class="logo-img">
                <img id="i2gy" src="../assets/logo.png" />
            </div>
            <div id="i9x1" v-for="user in users" :key="user.id">Hey!! We use Netlify for hosting and authentication. We'll introduce Google
                and other
                authentication
                means later {{ user.email }}.
            </div>
            <div class="gjs-row" id="i27o">
                <div class="gjs-cell" id="ioc3">
                </div>
            </div>
            <div class="start">
                <div id="g_id_onload"
                    data-client_id="913987535189-inmbarcfp0be3l5mhqcu5ca46ss8po7c.apps.googleusercontent.com"
                    data-callback="handleCredentialResponse">
                </div>
                <div class="g_id_signin" data-type="standard" data-theme="filled_blue"></div>
            </div>
            <div class="logo-img">
                <img id="iix4i" src="../assets/intro.png" />
            </div>
        </div>
    </body>
</template>
  
<script>
import netlifyIdentity from 'netlify-identity-widget';
import { useCollection } from 'vuefire'
import { usersRef } from '../firebaseInit';
const users = useCollection(usersRef);

export default {
    name: 'Auth',

    data() {
        return {
            users: users
        }
    },

    firestore: {
        users: users
    },

    mounted() {
        function decodeJwtResponse(token) {
            let base64Url = token.split('.')[1]
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload)
        }
        window.handleCredentialResponse = (response) => {
            localStorage.setItem("gtoken", response.credential)
            let responsePayload = decodeJwtResponse(response.credential);
            localStorage.setItem("user", JSON.stringify(responsePayload))
            document.location.href = '/dashboard'
        }
    },
    methods: {

    }
}

</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

.logo-img {
    display: grid;
    place-items: center;
    overflow: hidden;
}

.gjs-row {
    display: table;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    width: 100%;
}

.gjs-cell {
    width: 8%;
    display: table-cell;
    height: 75px;
}

.start {
    display: flex;
    justify-content: center;
    padding: 50px;
}

.img-start {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;
    border-style: solid;
    border-color: #2dc046;
}

#i9x1 {
    text-align: center;
    font-family: Trebuchet MS, Helvetica, sans-serif;
    padding: 20px;
}


#i9aw {
    text-align: center;
}

@media (max-width: 992px) {
    #i9aw {
        text-align: center;
    }

    #i9x1 {
        text-align: center;
        font-family: Trebuchet MS, Helvetica, sans-serif;
    }
}

@media (max-width: 768px) {
    .gjs-cell {
        width: 100%;
        display: block;
    }
}

@media (max-width: 480px) {
    #i9x1 {
        padding: 10px;
        text-align: center;
        font-family: Trebuchet MS, Helvetica, sans-serif;
        font-size: 14px;
    }

    #i2gy {
        color: black;
        width: 105px;
        height: 33px;
        position: static;
    }

    #i9aw {
        padding: 10px;
        text-align: center;
    }

    #iix4i {
        color: black;
        width: 320px;
        height: 571px;
        padding: 0px 0px 0px 0px;
    }
}
</style>