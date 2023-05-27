<template>
    <div class="navbar">
        <div class="navbar-container" data-gjs="navbar">
            <a href="/" class="navbar-brand"><img src="../assets/logo.png" class="nav-img" /></a>
            <div class="navbar-burger" id="iksl">
                <div class="navbar-burger-line">
                </div>
                <div class="navbar-burger-line">
                </div>
                <div class="navbar-burger-line">
                </div>
            </div>
            <div data-gjs="navbar-items" class="navbar-items-c">
                <nav class="navbar-menu">
                    <a href='/' class="navbar-menu-link">Home</a>
                    <a href='/about' class="navbar-menu-link">About</a>
                    <a href='/contact' class="navbar-menu-link">Contact</a>
                    <a href='https://docs.peppubuild.com/' class="navbar-menu-link">Docs</a>
                    <a href='/privacy' class="navbar-menu-link">Privacy</a>
                    <button class="navbar-menu-link setup-button">
                        <a href="https://workspace.peppubuild.com/auth" class="white">Login</a>
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Headers',

    mounted() {
        var items = document.querySelectorAll('#iksl');
        for (var i = 0, len = items.length; i < len; i++) {
            (function () {
                var n3, t3 = this, e3 = "gjs-collapse", a3 = "max-height", o3 = 0, i3 = function () {
                    var n4 = document.createElement("void"), t4 = {
                        transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd"
                    };
                    for (var e4 in t4)
                        if (void 0 !== n4.style[e4])
                            return t4[e4];
                }
                    (), r2 = function (n4) {
                        o3 = 1;
                        var t4 = function (n5) {
                            var t5 = window.getComputedStyle(n5), e5 = t5.display, o4 = parseInt(t5[a3]);
                            if ("none" !== e5 && 0 !== o4)
                                return n5.offsetHeight;
                            n5.style.height = "auto", n5.style.display = "block", n5.style.position = "absolute", n5.style.visibility = "hidden";
                            var i4 = n5.offsetHeight;
                            return n5.style.height = "", n5.style.display = "", n5.style.position = "", n5.style.visibility = "", i4;
                        }
                            (n4), e4 = n4.style;
                        e4.display = "block", e4.transition = "".concat(a3, " 0.25s ease-in-out"), e4.overflowY = "hidden", "" == e4[a3] && (e4[a3] = 0), 0 == parseInt(e4[a3]) ? (e4[a3] = "0", setTimeout(function () {
                            e4[a3] = t4 + "px";
                        }
                            , 10)) : e4[a3] = "0";
                    };
                e3 in t3 || t3.addEventListener("click", function (e4) {
                    if (e4.preventDefault(), !o3) {
                        var l2 = t3.closest("[data-gjs=navbar]"), c2 = null == l2 ? void 0 : l2.querySelector("[data-gjs=navbar-items]");
                        c2 && r2(c2), n3 || (null == c2 || c2.addEventListener(i3, function () {
                            o3 = 0;
                            var n4 = c2.style;
                            0 == parseInt(n4[a3]) && (n4.display = "", n4[a3] = "");
                        }
                        ), n3 = 1);
                    }
                }
                ), t3[e3] = 1;
            }
                .bind(items[i]))();
        }
    },
}
</script>

<style>
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
    width: fit-content;
    word-break: break-word;
    border: 0;
}

.navbar {
    background-color: rgb(17, 17, 17);
    color: rgb(221, 221, 221);
    min-height: 50px;
    width: 100%;
}

.white {
    color: #FFFFFF;
    text-decoration: none;
}

.navbar-container {
    max-width: 950px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    width: 95%;
}

.navbar-container::after {
    content: "";
    clear: both;
    display: block;
}

.navbar-brand {
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    float: left;
}

.navbar-burger {
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

.nav-img {
    width: 70%;
}

.navbar-burger-line {
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    background-color: white;
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
}

.navbar-items-c {
    display: inline-block;
    float: right;
}

.navbar-menu {
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    display: block;
    float: right;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}

.navbar-menu-link {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    color: inherit;
    text-decoration: none;
    display: inline-block;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    font-family: Helvetica, sans-serif;
    font-size: medium;
}

@media (max-width: 768px) {
    .navbar-items-c {
        display: none;
        width: 100%;
    }

    .navbar-burger {
        display: block;
    }

    .navbar-menu {
        width: 100%;
    }

    .navbar-menu-link {
        display: block;
    }
}</style>