<template>
    <body id="if7l">
        <aside class="wrapper">
            <div class="sidebar-burger" @click="showSide">
                <div class="sidebar-burger-line">
                </div>
                <div class="sidebar-burger-line">
                </div>
                <div class="sidebar-burger-line">
                </div>
            </div>
            <!--Top menu -->
            <div class="sidebar" id="dedee">
                <div class="p-top">
                    <a href="https://peppubuild.netlify.app"><img src="https://i.ibb.co/8BCBPZK/IMG-2437-1.png"
                            alt="profile_picture" /></a>
                </div>
                <div class="profile">
                    <img :src="imageLink" alt="profile_picture" />
                    <h3>{{ name }}
                    </h3>
                </div>
                <ul>
                    <li>
                        <a href="/dashboard" class="active"><span class="icon"><i class="fas fa-home">
                                </i></span><span class="item">Dashboard</span></a>
                    </li>
                    <li>
                        <a href="/workspace"><span class="icon"><i class="fas fa-desktop">
                                </i></span><span class="item">Workspace</span></a>
                    </li>
                    <li>
                        <a href="#"><span class="icon"><i class="fas fa-tachometer-alt">
                                </i></span><span class="item">Notifications</span></a>
                    </li>
                    <li>
                        <a href="#"><span class="icon"><i class="fas fa-database">
                                </i></span><span class="item">Help</span></a>
                    </li>
                    <li>
                        <a href="#"><span class="icon"><i class="fas fa-cog">
                                </i></span><span class="item">Settings</span></a>
                    </li>
                    <li>
                        <a href="/logout"><span class="icon"><i class="fas fa-cog">
                                </i></span><span class="item">Logout</span></a>
                    </li>
                </ul>
            </div>
        </aside>
    </body>
</template>

<script>
let userinfo = JSON.parse(localStorage.getItem('user'));

export default {
    name: 'Sidebar',
    data() {
        let img = userinfo.picture;
        return {
            name: userinfo.given_name,
            imageLink: img,
        };
    },

    methods: {
        showSide() {
            var x = document.getElementById("dedee");
            var y = document.getElementById("d-cont");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.style.marginLeft = "225px";
                y.style.width = "calc(100% - 225px)";
            } else {
                x.style.display = "none";
                y.style.width = "100%";
                y.style.marginLeft = "0%";
            }
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

* {
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

.wrapper .sidebar {
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: #E8EAED;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 225px;
    height: 100%;
    padding-top: 20px;
    padding-right: 0px;
    padding-bottom: 20px;
    padding-left: 0px;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
}

.sidebar-burger-line {
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    background-color: black;
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
}

.sidebar-burger {
    margin-top: 10px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    width: 45px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    display: none;
    float: right;
    cursor: pointer;
}

.wrapper .sidebar .profile {
    margin-bottom: 30px;
    text-align: center;
}

.wrapper .sidebar .profile img {
    display: block;
    width: 100px;
    height: 100px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
}

.wrapper .sidebar .profile h3 {
    color: black;
    margin-top: 10px;
    margin-right: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
}

.wrapper .sidebar .p-top {
    display: block;
    width: 100px;
    height: 100px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
}

.wrapper .sidebar ul li a {
    display: block;
    padding-top: 13px;
    padding-right: 30px;
    padding-bottom: 13px;
    padding-left: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E8EAED;
    color: black;
    font-size: 16px;
    position: relative;
}

.wrapper .sidebar ul li a .icon {
    color: rgb(222, 228, 236);
    width: 30px;
    display: inline-block;
}

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
    color: rgb(12, 125, 177);
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: white;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: #E8EAED;
}

.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon {
    color: #E8EAED;
}

.wrapper .sidebar ul li a:hover::before,
.wrapper .sidebar ul li a.active::before {
    display: block;
}

.sidebar {
    box-shadow: 0 0 5px 0 black;
}

@media (max-width: 768px) {
    .sidebar {
        display: none;
        width: 100%;
    }

    .sidebar-burger {
        display: block;
    }
}
</style>