<template>
  <div id="gjs"></div>
</template>

<script>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import plugin from 'grapesjs-preset-webpage';
import netlifyIdentity from 'netlify-identity-widget';

export default {
  name: 'HomeView',

  mounted() {
    netlifyIdentity.init({
      APIUrl: "",
      logo: true // you can try false and see what happens
    });

    var editor = grapesjs.init({
      height: '100%',
      showOffsets: true,
      noticeOnUnload: true,
      storageManager: true,
      container: '#gjs',
      fromElement: true,

      plugins: [plugin, 'gjs-blocks-basic', 'grapesjs-plugin-export'],
      pluginsOpts: {
        [plugin]: {},
        'gjs-blocks-basic': {},
        'grapesjs-plugin-export': {}
      }
    });

    editor.Panels.addButton('devices-c',
      [{
        id: 'save', className: "button",
        label: 'Publish Website',
        command: publishWebsite
      },]);

    function publishWebsite() {
      netlifyIdentity.open('login');
      let accessToken =  window.localStorage.getItem('gotrue.user');
      console.log(accessToken);
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
  font-size: 20px;
}

.gjs-pn-panel {
  font-size: 20px;
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