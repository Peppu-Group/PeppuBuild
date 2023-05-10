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
            <div id="i9x1">What type of website are you building?
                <div class="drop-down">
                    <label for="inputTitle"></label>
                    <select class="classic" v-model="categories">
                        <option value="portfolio">Portfolio Website</option>
                        <option value="landing">Landing Page</option>
                        <option value="business">Business Website</option>
                    </select>
                </div>
                <button @click='finish' class="setup-button">Finish</button>
            </div>
        </div>
    </body>
</template>

<script>
</script>
  
<script>
let userinfo = JSON.parse(localStorage.getItem('user'));

export default {
    name: 'Template',
    data() {
    return {
        categories: "",
    }
  },

  methods: {
    finish() {
        this.$router.push({name: this.categories})
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

.setup-img {
    display: grid;
    place-items: center;
    overflow: hidden;
    margin: 50px;
}

.drop-down {
    padding: 10px;
}

select {
    /* styling */
    background-color: white;
    border: thin solid rgb(37, 196, 19);
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;


    /* reset */

    margin: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
}

select.classic {
    background-image:
        linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        100% 0;
    background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
    background-repeat: no-repeat;
    width: 50%;
}


input {
    border: #2b7510;
}

/* CSS */
.setup-button {
    background: #2b7510;
    border-radius: 999px;
    box-shadow: #2b7510 0 10px 20px -10px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
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

@media (max-width: 350px) {
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