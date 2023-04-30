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
            <div id="i9x1">Hey!! We use Netlify for hosting and authentication. We'll introduce Google and other
                authentication
                means later.
            </div>
            <div class="gjs-row" id="i27o">
                <div class="gjs-cell" id="ioc3">
                </div>
            </div>
            <div class="start">
                <a href="#" @click="authenticate"><img src="../assets/netlify-start.png" class="img-start" /></a>
            </div>
            <div class="logo-img">
                <img id="iix4i" src="../assets/intro.png" />
            </div>
        </div>
    </body>
</template>
  
<script>
import netlifyIdentity from 'netlify-identity-widget';

export default {
    name: 'Auth',

    mounted() {
        netlifyIdentity.init({
            APIUrl: "",
            logo: false // you can try false and see what happens
        });
        netlifyIdentity.on('login', user => console.log('login', user));
    },
    methods: {
        authenticate() {
            netlifyIdentity.open('login');
            netlifyIdentity.on("login", user => {
                console.log(user)
            });
            console.log('hanny');
        }
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