<template>
  <div id="gjs" style= "overflow:hidden"></div>
</template>

<script>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/index'
import plugin from 'grapesjs-preset-webpage';
import grapesjsblocks from 'grapesjs-blocks-basic';
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
    });
    editor.Panels.addButton("devices-c", [{
      id: "save",
      className: "button",
      label: "Publish Website",
      command: publishWebsite
    },]);
    const bm = editor.BlockManager;
    bm.add("social-sign-in-butttons-section", {
      label: "Button",
      content:
        '<div><button class="button">Yee</button></div><style>.button{background-color: #4CAF50;border: none;color: white;padding: 20px 30px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;} .button:hover {background-color: white; color-green;}',
      attributes: {
        class: "fa fa-square"
      },
      category: 'Basic'
    });
    bm.remove('link-block');
    bm.remove('quote');

    

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
  background-color: #4CAF50 !important;
  color: white !important;
}

.gjs-four-color,
.gjs-four-color-h:hover {
  color: #4CAF50 !important;
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
  color: #4CAF50;
  padding: 5px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>