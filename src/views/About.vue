<template>
    <body id="iljx">
        <Headers/>
        <div class="background">
        <section-two>
            <hero>
                <div class="contain">
                    <div class="text">
                    </div>
                </div>
            </hero>
            <div id="inv6i" class="gjs-row">
                <div class="gjs-cell">
                </div>
            </div>
            <div class="container">
                <div class="child">
                    <img src="../assets/peppu.png"
                        class="img" />
                </div>
                <h1 class="center">
                    <br />
                </h1>
                <p id="ib2x">
                    <br />
                <h1 draggable="false" class="center gjs-selected">Build pages with JavaScript frameworks
                    <br />and technologies you love
                </h1>
                <br />
                <span id="iu1iov">PeppuDraw allows you to create pages using the JavaScript frameworks and technologies you
                    love. With our powerful tools and user-friendly interface, you can easily build dynamic, responsive, and
                    interactive websites that meet your unique needs and preferences.
                    Whether you're a seasoned developer or a beginner, our platform empowers you to bring your vision to
                    life and showcase your skills to the world.</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                </p>
            </div>
        </section-two>
        <div id="ieem1f" class="tech">
            <img id="imemdl"
            src='' />
        </div>
        <h1 id="iklm-2" draggable="false" class="center gjs-selected">
            <span id="iklm-2-2" draggable="false" class="center gjs-selected">What we Offer?</span>
        </h1>
        <team>
            <div class="badges">
                <div class="badge">
                    <div class="badge-header">
                    </div>
                    <img src="../assets/build.png"
                        class="badge-avatar" />
                    <div class="badge-body">
                        <div class="badge-name">Build pages easily
                        </div>
                        <div class="badge-role">
                            <br />
                        </div>
                        <div class="badge-desc">Drag and drop components to build your website easily. You can also start
                            building from already made templates.
                        </div>
                    </div>
                    <div class="badge-foot">
                    </div>
                </div>
                <team>
                    <div class="badges">
                        <div class="badge">
                            <div class="badge-header">
                            </div>
                            <img src="../assets/deploy.png"
                                class="badge-avatar" />
                            <div class="badge-body">
                                <div class="badge-name">Deploy in one click
                                </div>
                                <div class="badge-role">
                                    <br />
                                </div>
                                <div class="badge-desc">Starting with Netlify, you can deploy your codes from PeppuDraw.
                                </div>
                            </div>
                            <div class="badge-foot">
                            </div>
                        </div>
                    </div>
                </team>
                <team>
                    <div class="badges">
                        <div class="badge">
                            <div class="badge-header">
                            </div>
                            <img src="../assets/code.png"
                                class="badge-avatar" />
                            <div class="badge-body">
                                <div class="badge-name">Own your code
                                </div>
                                <div class="badge-role">
                                    <br />
                                </div>
                                <div class="badge-desc">While PeppuDraw is a Website builder, you have full control of your
                                    codes. You can export into a zip file or host them in a git repository.
                                </div>
                            </div>
                            <div class="badge-foot">
                            </div>
                        </div>
                    </div>
                </team>
            </div>
    </team>
    <Footers/>
    </div>
</body>
</template>

<script>
import Footers from '../components/Footers.vue'
import Headers from '../components/Headers.vue'
export default {
    name: 'About',

    components: { Footers, Headers },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.background {
    background-color: #ffffff;
    background-image: linear-gradient(to top right, #ffffff, #b5cabb, #ffffff, #f0f0e0, #f0ebd8),
    linear-gradient(to left, #ffffff, #ffffff);
}
.center{
  text-align:center;
}
.container{
  display:flex;
}
.child{
  margin-top:30px;
  margin-right:30px;
  margin-bottom:30px;
  margin-left:30px;
  text-align:center;
}
.img{
  max-width:100vw;
  max-height:30vw;
}
#ib2x{
  font-family:Trebuchet MS, Helvetica, sans-serif;
  color:#000000;
}
.gjs-row{
  display:table;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  width:100%;
}
.tech{
  display:table;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  width:100%;
}
.gjs-cell{
  width:8%;
  display:table-cell;
  height:75px;
}
.center.gjs-selected{
  font-family:Trebuchet MS, Helvetica, sans-serif;
}
.contain{
  height:auto;
  width:100vw;
  background-color:rgb(17, 17, 17);
}
.text{
  color:white;
  text-align:center;
}
.text .big{
  font-size:50px;
  padding-top:5vw;
  padding-right:5vw;
  padding-bottom:5vw;
  padding-left:5vw;
}
.text .small{
  font-size:25px;
  padding-top:5px;
  padding-right:5px;
  padding-bottom:5px;
  padding-left:5px;
}
.badges{
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  flex-wrap:wrap;
}
.badge{
  width:290px;
  font-family:Helvetica, serif;
  background-color:white;
  margin-top:30px;
  margin-bottom:30px;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
  font-weight:100;
  overflow-x:hidden;
  overflow-y:hidden;
  text-align:center;
}
.badge-header{
  height:115px;
  background-color: #2D522D;
  background-position-x:left, center;
  background-position-y:top, center;
  background-attachment:scroll, fixed;
  overflow-x:hidden;
  overflow-y:hidden;
}
.badge-name{
  font-size:1.4em;
  margin-bottom:5px;
}
.badge-role{
  font-size:1em;
  margin-bottom:25px;
}
.badge-desc{
  font-size:0.8rem;
  line-height:20px;
}
.badge-avatar{
  width:100px;
  height:100px;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  border-top-width:5px;
  border-right-width:5px;
  border-bottom-width:5px;
  border-left-width:5px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(255, 255, 255);
  border-right-color:rgb(255, 255, 255);
  border-bottom-color:rgb(255, 255, 255);
  border-left-color:rgb(255, 255, 255);
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;
  margin-top:-75px;
  position:relative;
}
.badge-body{
  margin-top:35px;
  margin-right:10px;
  margin-bottom:35px;
  margin-left:10px;
}
.badge-foot{
  color:rgb(255, 255, 255);
  background-color:rgb(212, 236, 216);
  padding-top:13px;
  padding-bottom:13px;
  display:flex;
  justify-content:center;
}
#iu1iov{
  font-size:16px;
  color:black;
  font-family:"trebuchet ms", sans-serif;
  font-variant-ligatures:normal;
  orphans:2;
  white-space:pre-wrap;
  widows:2;
  text-decoration-thickness:initial;
}
#imemdl{
  color:black;
}
@media screen and (max-width: 800px){
  .container{
    display:block;
    width:100%;
    padding-top:20px;
    padding-right:20px;
    padding-bottom:20px;
    padding-left:20px;
  }
}
@media (max-width: 768px){
  .gjs-cell{
    width:100%;
    display:block;
  }
}
</style>