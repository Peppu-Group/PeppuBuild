<template>
  <div id="gjs" style="overflow: hidden"></div>
</template>

<script>
  import grapesjs from 'grapesjs'
  import 'grapesjs/dist/css/grapes.min.css'
  import 'grapesjs/dist/grapes.min.js'
  import 'grapesjs-preset-webpage/dist/index'
  import plugin from 'grapesjs-preset-webpage'
  import grapesjsblocks from 'grapesjs-blocks-basic'
  import grapesnav from 'grapesjs-navbar'
  import { auth } from '../netlify/redirect'

  export default {
      name: 'HomeView',

      mounted() {
          var editor = grapesjs.init({
              container: '#gjs',
              height: '1000px',
              width: '100%',
              plugins: [plugin, grapesjsblocks, grapesnav],
              storageManager: true,
              pluginsOpts: {
                  'grapesjs-preset-webpage': {},
                  'grapesjs-blocks-basic': {},
                  'grapesjs-navbar': {}
              }
          })

          // create navbar component since inline can't contain js
          editor.Components.addType('footer', {
              // Make the editor understand when to bind `my-input-type`
              isComponent: (el) => el.tagName === 'INPUT',

              // Model definition
              model: {
                  // Default properties
                  defaults: {
                      tagName: 'div',
                      components: `
            <footer>
        <div class="footer-content">
            <h3>Foolish Developer</h3>
            <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul class="socials">
                <li><a href="#" class="fa fa-facebook"><i ></i></a></li>
                <li><a href="#" class="fa fa-twitter"><i ></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Foolish Developer</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
      `,
      styles: `
      footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;

    padding-top: 40px;
    color: #fff;
}
.white {
  color: white;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
    border: 1.1px solid white;
    padding: 5px;

    border-radius: 50%;

}
.socials a i{
    font-size: 1.1rem;
    width: 20px;


    transition: color .4s ease;

}
.socials a:hover i{
    color: aqua;
}

.footer-bottom{
    background: #000;
    width: 100vw;
    padding: 20px;
padding-bottom: 40px;
    text-align: center;
}
.footer-bottom p{
float: left;
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom p a{
  color:#44bae8;
  font-size: 16px;
  text-decoration: none;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}
.footer-menu{
  float: right;

}
.footer-menu ul{
  display: flex;
}
.footer-menu ul li{
padding-right: 10px;
display: block;
}
.footer-menu ul li a{
  color: #cfd2d6;
  text-decoration: none;
}
.footer-menu ul li a:hover{
  color: #27bcda;
}

@media (max-width:500px) {
.footer-menu ul{
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}

      `,
                  }
              }
          })

          editor.Panels.addButton('devices-c', [
              {
                  id: 'save',
                  className: 'button',
                  label: 'Publish Website',
                  command: publishWebsite
              }
          ])
          const bm = editor.BlockManager
          // A block for the custom component
          bm.add('footer', {
              label: 'Footer',
              content: { type: 'footer' },
              attributes: {
                  class: 'fa fa-sign-out'
              },
              category: 'Footer'
          })
          bm.add('social-sign-in-butttons-section', {
              label: 'Button',
              /*
              content: [
                { type: 'image' },
                `<div>Extra</div>`
              ],
              */
              content: [
                  `<div class="topnav" id="myTopnav">
          <a href="#">
            <img class='img' src="https://i.ibb.co/8BCBPZK/IMG-2437-1.png"></img>
            </a>
          <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        &#9776;
      </a>
    </div> 
    
    <style>
    .topnav {
  overflow: hidden;
  background-color: #333;
      }
      .topnav a{
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav .icon {
  display: none;
}

.topnav .img {
 
  width: 50px;
  height: 30px;
}

@media screen and (max-width: 600px) {
  .topnav a:not(.icon) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
    </style>
    `
              ],
              traits: [{ type: 'image', src: `https://i.ibb.co/8BCBPZK/IMG-2437-1.png` }],
              attributes: {
                  class: 'fa fa-square'
              },
              category: 'Basic'
          })
          bm.remove('link-block')
          bm.remove('quote')

          async function publishWebsite() {
              /*
              netlifyIdentity.open('login');
              let item =  window.localStorage.getItem('gotrue.user');
              let accessToken = JSON.parse(item);
              let client = new NetlifyAPI(accessToken.token.access_token)
              let sites = await client.listSites();
              console.log(sites);
              */
              /* 
               netlifyIdentity.open("login");
               let item = window.localStorage.getItem("gotrue.user");
               let accessToken = JSON.parse(item);
               // let client = new NetlifyAPI(accessToken.token.access_token)
               // Headers object
               let headers = { "Content-Type": "application/json", "Authorization": `Bearer ${accessToken.token.access_token}` };
               // Body
               let body = { "name": "cherry" };
               // URL
               let url = "https://api.netlify.com/api/v1/accounts";
               // Request
               let results = await axios.get(url, { headers });
               // Showing results
               console.log(results);
               */
              return auth.call()
          }
      }
  }
</script>
<style>
  body,
  html {
      margin: 0;
      font: caption;
      height: 100%;
  }

  /* Theming */
  .gjs-one-bg {
      background-color: black !important;
  }

  .gjs-two-color {
      color: white !important;
  }

  .gjs-three-bg {
      background-color: #4caf50 !important;
      color: white !important;
  }

  .gjs-four-color,
  .gjs-four-color-h:hover {
      color: #4caf50 !important;
  }

  /* Style manager properties*/
  .gjs-sm-properties {
      font-size: 14px;
  }

  .gjs-pn-panel {
      font-size: 15px;
  }

  .gjs-block {
      font-size: 1px;
  }

  .button,
  .button:hover {
      background-color: white;
      /* Green */
      border: none;
      color: #4caf50;
      padding: 5px 30px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
  }
</style>