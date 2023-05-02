<template>
    <body id="if7l">
        <Sidebar />
        <div class="dash-content">
            <div id="i2sw">My Dashboard
            </div>
            <section-one>
                <div class="one-container">
                    <div class="one-child">
                        <p class="i0sf">
                            Hi {{name}}, welcome back!
                        </p>
                        <p class="i0sg">
                            We hope you're having a great day and are 
                            ready to dive back and start creating magic.
                        </p>
                    </div>
                </div>
                <div id="inyx">Projects
                </div>
            </section-one>
        </div>
    </body>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
let userinfo = JSON.parse(localStorage.getItem('user'));

export default {
    name: 'Dashboard',
    components: { Sidebar },
    data() {
    return {
      name: userinfo.given_name,
    };
  },
}
</script>

<style>
* {
    box-sizing: border-box;
}

.dash-content {
    width: calc(100% - 225px);
    margin-left: 225px;
    transition: all 0.5s ease;
}

.one-container {
    display: block;
    width: 100%;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}

.one-child {
    padding: 20px;
    background-color: #d0edd8;
    border-radius: 10px;
}

.i0sf {
    font-size: 18px;
    font-weight: 550;
    padding-bottom: 20px;
}

#i2sw {
    padding: 30px;
    text-align: left;
    font-family: Helvetica, sans-serif;
    font-size: 25px;
    font-weight: 500;
}

#inyx {
    padding: 10px;
    text-align: center;
    font-family: Helvetica, sans-serif;
}

@media screen and (max-width: 800px) {
    .one-container {
        display: block;
        width: 100%;
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
    }
}</style>