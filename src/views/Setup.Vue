<template>
    <body id="iljx">
        <div class="setup-background">
            <div class="gjs-row" id="iys7">
                <div class="gjs-cell" id="id2x">
                </div>
            </div>
            <div class="setup-img">
                <img id="i2gy" src="../assets/logo.png" />
            </div>
            <div id="i9x1">Hello {{ name }}, build fully responsive multi-page sites with Peppubuild. <br/> Let's walk you through building your first site.
            </div>
            
            <div class="start">
                <button class='setup-button' @click="start">Start with a Template</button>
            </div>
            <div id="i9x1">If you're not in a rush to build a website, explore Peppubuild's dashboard.
            </div>
            <div class="start">
                <button class='setup-button' @click="skip">Skip to Dashboard</button>
            </div>
        </div>
    </body>
</template>
  
<script>
import netlifyIdentity from 'netlify-identity-widget';
import { useCollection } from 'vuefire'
import { usersRef } from '../firebaseInit';
import { collection, addDoc } from "firebase/firestore";
import axios from 'axios';

const users = useCollection(usersRef);
let userinfo = JSON.parse(localStorage.getItem('user'));

export default {
    name: 'Auth',

    data() {
        return {
            users: users,
            name: userinfo.given_name
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
            console.log(responsePayload.email)
            this.createUser(responsePayload.email)
            localStorage.setItem("user", JSON.stringify(responsePayload))
        }
    },
    methods: {
        createUser(email) {
            let i = 0;
            let usersval = this.users;
            while (i < usersval.length) {
                if (email != usersval[i].email) {
                    let docRef = addDoc(usersRef, {
                        email: email
                    });
                    this.createMail(email)
                    document.location.href = '/'
                } else {
                     document.location.href = '/dashboard'
                }
                i++;
            }
            // search for user email.
            // if not found, add it to database.
            // send welcome message.
            // const docRef = addDoc(usersRef, {
            // email: "Tokyo"
            // });
            // console.log("Document written with ID: ", docRef.id);

        },

        createMail(email) {
            const form = new FormData();
            form.append('from', 'Mailgun Sandbox <postmaster@sandbox02193a1e330247a48a9a5996e5c48c89.mailgun.org>');
            form.append('to', email);
            form.append('subject', 'Hello Ukpai Ugochi');
            form.append('text', 'Congratulations Ukpai Ugochi, you just sent an email with Mailgun! You are truly awesome!');

            const response = fetch('https://api.mailgun.net/v3/sandbox02193a1e330247a48a9a5996e5c48c89.mailgun.org/messages', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa('api:6c58393e6edf54de9f914d88325c1bf2-102c75d8-74a87048')
                },
                body: form
            });

            console.log(response)
        },

        skip() {
            this.$router.push({ name: "dashboard" });
        }, 

        start() {}
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

.setup-img {
    display: grid;
    place-items: center;
    overflow: hidden;
    margin: 50px;
}

/* CSS */
.setup-button {
  background: #2b7510;
  border-radius: 999px;
  box-shadow: #2b7510 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

.setup-background {
    background-color: #ffffff;
    background-image: linear-gradient(to top right, #ffffff, #b5cabb, #ffffff, #f0f0e0, #f0ebd8),
    linear-gradient(to left, #ffffff, #ffffff);
    height: 100vh;
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

    .setup-background {
        height: 100vh;
    }
}

@media (max-width: 768px) {
    .gjs-cell {
        width: 100%;
        display: block;
    }

    .setup-background {
        height: 100vh;
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

    .setup-background {
        height: 100vh;
    }
}
</style>