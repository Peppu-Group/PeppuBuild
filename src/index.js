import { netlifyIdentity } from 'netlify-identity-widget';

var editor = grapesjs.init({
    height: '100%',
    showOffsets: true,
    noticeOnUnload: true,
    storageManager: true,
    container: '#gjs',
    fromElement: true,

    plugins: ['grapesjs-preset-webpage', 'gjs-blocks-basic', 'grapesjs-plugin-export'],
    pluginsOpts: {
        'grapesjs-preset-webpage': {},
        'gjs-blocks-basic': {},
        'grapesjs-plugin-export': {}
    }
});

editor.Panels.addButton('devices-c',
    [{
        id: 'save', className:"button",
        label: 'Publish Website',
        command: publishWebsite
    },]);

function publishWebsite() {
    netlifyIdentity.open();
}