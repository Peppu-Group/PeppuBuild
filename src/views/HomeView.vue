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
      height: '1200px',
      width: '100%',
      plugins: [plugin, grapesnav],
      storageManager: false,
      pluginsOpts: {
        'grapesjs-preset-webpage': {},
        'grapesjs-blocks-basic': {},
        'grapesjs-navbar': {}
      }
    })

    // create footer section
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
            <h3>Builder Created With Grapesjs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mauris nec justo rutrum rhoncus. Suspendisse potenti. 
                Maecenas at urna eu tortor fringilla ultrices. 
                Curabitur odio mauris, rutrum id eleifend ac, sodales at lacus. 
                In rhoncus aliquet libero ornare dictum. Etiam in neque molestie, ultrices metus at, lacinia tortor. Mauris feugiat gravida sapien. 
                Pellentesque non faucibus nisi, non tincidunt diam.
            </p>
            <ul class="socials">
                <img src="https://i.ibb.co/8BCBPZK/IMG-2437-1.png"></img>
                <li><a href="#" class="fa fa-twitter"><i ></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Made with Peppudraw</a> </p>
        </div>

    </footer>
      `,
          styles: `
    footer{
    position: absolute;
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

.footer-bottom a{
  color: green;
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
}`,
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

    // create hero section
    editor.Components.addType('hero', {
      // Make the editor understand when to bind `my-input-type`

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'hero',
          components: `
          <div class="contain">
            <div class="text">
              <div class="big">Create a Landing Page in Five Minutes</div>
              <div class="small">Welcome to my website</div>
            </div>
            <div class="buttons">
              <button type="button" class="sub-button">Get Started</button>
              <button type="button" class="sub-button">Learn More</button>
            </div>
          </div>
          `,
          styles: `
          .contain {
            height: auto;
            width: 100vw;
            background-color: #111;
          }

          .text {
            color: white;
            text-align: center;
          }

          .text .big{
            font-size: 50px;
            padding: 20px
          }

          .text .small{
            font-size: 25px;
            padding: 5px;
          }

          .buttons {
            text-align: center;
          }

          .sub-button {
            padding: 14px 28px;
            font-size: 16px;
            border: 2px solid black;
            background-color: black;
            cursor: pointer;
            border-color: #04AA6D;
            color: green;
            border-radius: 5px;
            margin: 10px 10px 30px 10px;
          }

          .sub-button:hover {
            background-color: #04AA6D;
            color: white;
          }
          `,
        }
      }
    })

    // A block for the custom component
    bm.add('hero', {
      label: 'Hero',
      content: { type: 'hero' },
      attributes: {
        class: 'fa fa-envelope-open'
      },
      category: 'Blocks'
    })

    // create section one
    editor.Components.addType('section-one', {
      // Make the editor understand when to bind `my-input-type`

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'section-one',
          components: `
          <h1 class="center-one">This Text Section</h1>
          <div class="one-container">
            <div class="one-child">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mauris nec justo rutrum rhoncus. Suspendisse potenti. 
                Maecenas at urna eu tortor fringilla ultrices. 
                Curabitur odio mauris, rutrum id eleifend ac, sodales at lacus. 
                In rhoncus aliquet libero ornare dictum. Etiam in neque molestie, ultrices metus at, lacinia tortor. Mauris feugiat gravida sapien. 
                Pellentesque non faucibus nisi, non tincidunt diam.
              </p>
            </div
            <div class="one-child">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mauris nec justo rutrum rhoncus. Suspendisse potenti. 
                Maecenas at urna eu tortor fringilla ultrices. 
                Curabitur odio mauris, rutrum id eleifend ac, sodales at lacus. 
                In rhoncus aliquet libero ornare dictum. Etiam in neque molestie, ultrices metus at, lacinia tortor. Mauris feugiat gravida sapien. 
                Pellentesque non faucibus nisi, non tincidunt diam.
              </p>
            </div>
          </div>
          `,
          styles: `
          .one-container {
            display: flex;
            width: 100%;
            padding: 20px;
          }

          .center-one {
            text-align: center;
          }

          .one-child {
            padding: 10px;
          }
          
          @media screen and (max-width: 800px) {
            .one-container {
            display: block;
            width: 100%;
            padding: 20px;
            }
          }
          `,
        }
      }
    })

    // A block for the custom component
    bm.add('section-one', {
      label: 'section-one',
      content: { type: 'section-one' },
      attributes: {
        class: 'fa fa-file-excel-o'
      },
      category: 'Blocks'
    })

    // create section two
    editor.Components.addType('section-two', {
      // Make the editor understand when to bind `my-input-type`

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'section-two',
          components: `
          <h1 class="center">This is Text - Image Section</h1>
          <div class="container">
            <div class="child">
              <img class="img" src=""></img>
            </div
            <div class="child two">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mauris nec justo rutrum rhoncus. Suspendisse potenti. 
                Maecenas at urna eu tortor fringilla ultrices. 
                Curabitur odio mauris, rutrum id eleifend ac, sodales at lacus. 
                In rhoncus aliquet libero ornare dictum. Etiam in neque molestie, ultrices metus at, lacinia tortor. Mauris feugiat gravida sapien. 
                Pellentesque non faucibus nisi, non tincidunt diam.
              </p>
            </div>
          </div>
          `,
          styles: `
          .center {
            text-align: center;
          }
          .container {
            display: flex;
            width: 100%
            padding: 20px;
          }

          .child {
            margin: 30px;
            text-align: center;
          }

          .img {
            max-width: 50vw;
            max-height: 30vw;
          }
          @media screen and (max-width: 800px) {
            .container {
            display: block;
            width: 100%;
            padding: 20px;
            }
          }
          `,
        }
      }
    })

    // A block for the custom component
    bm.add('section-two', {
      label: 'section-two',
      content: { type: 'section-two' },
      attributes: {
        class: 'fa fa-file-powerpoint-o'
      },
      category: 'Blocks'
    })

     // create section cards
     editor.Components.addType('cards', {
      // Make the editor understand when to bind `my-input-type`

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'cards',
          components: `
          <div class="cards">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <div class="card-title">Title one</div>
                <div class="card-sub-title">Subtitle one</div>
                <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
              </div>
            </div>
          </div>
          `,
          styles: `
        .cards{
          display: flex;
          justify-content: space-around;
          flex-flow: wrap;
        }
        .card{
          background-color: white;
          height: 300px;
          width:300px;
          margin-top: 30px;
          margin-bottom:30px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          border-radius: 2px;
          transition: all 0.5s ease;
          font-weight: 100;
          overflow: hidden;
        }
        .card:hover{
          margin-top: -5px;
          box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
        }
        .card-header{
          height: 155px;
          background-image:url("https://via.placeholder.com/350x250/78c5d6/fff");
          background-size:cover;
          background-position:center center;
        }
        .card-body{
          padding: 15px 15px 5px 15px;
          color: #555;
        }
        .card-title{
          font-size: 1.4em;
          margin-bottom: 5px;
        }
        .card-sub-title{
          color: #b3b3b3;
          font-size: 1em;
          margin-bottom: 15px;
        }
        .card-desc{
          font-size: 0.85rem;
          line-height: 17px;
        }
          `,
        }
      }
    })

    // A block for the custom component
    bm.add('cards', {
      label: 'cards',
      content: { type: 'cards' },
      attributes: {
        class: 'fa fa-building-o'
      },
      category: 'Blocks'
    })

    // create section cards
    editor.Components.addType('team', {
      // Make the editor understand when to bind `my-input-type`

      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'team',
          components: `
          <div class="badges">
            <div class="badge">
              <div class="badge-header"></div>
              <img class="badge-avatar" src="https://i.ibb.co/HnCWj2v/team3.jpg">
              <div class="badge-body">
                <div class="badge-name">Laura Okoro</div>
                <div class="badge-role">CEO</div>
                <div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>
              </div>
              <div class="badge-foot">
                <span class="badge-link">f</span>
                <span class="badge-link">t</span>
                <span class="badge-link">ln</span>
              </div>
            </div>
          </div>
          `,
          styles: `
        .badges{
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .badge{
          width: 290px;
          font-family: Helvetica, serif;
          background-color: white;
          margin-top:30px;
          margin-bottom:30px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
          border-radius: 3px;
          font-weight: 100;
          overflow: hidden;
          text-align: center;
        }
        .badge-header{
          height: 115px;
          background-image:url("https://grapesjs.com/img/bg-gr-v.png"), url("https://grapesjs.com/img/work-desk.jpg");
          background-position:left top, center center;
          background-attachment:scroll, fixed;
          overflow: hidden;
        }
        .badge-name{
          font-size: 1.4em;
          margin-bottom: 5px;
        }
        .badge-role{
          color: #777;
          font-size: 1em;
          margin-bottom: 25px;
        }
        .badge-desc{
          font-size: 0.85rem;
          line-height: 20px;
        }
        .badge-avatar{
          width:100px;
          height:100px;
          border-radius: 100%;
          border: 5px solid #fff;
          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
          margin-top: -75px;
          position: relative;
        }
        .badge-body{
          margin: 35px 10px;
        }
        .badge-foot{
          color:#fff;
          background-color:#a290a5;
          padding-top:13px;
          padding-bottom:13px;
          display: flex;
          justify-content: center;
        }
        .badge-link{
          height: 35px;
          width: 35px;
          line-height: 35px;
          font-weight: 700;
          background-color: #fff;
          color: #a290a5;
          display: block;
          border-radius: 100%;
          margin: 0 10px;
        }
          `,
        }
      }
    })

    // A block for the custom component
    bm.add('team', {
      label: 'team',
      content: { type: 'team' },
      attributes: {
        class: 'fa fa-user'
      },
      category: 'Blocks'
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