
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

editor.on("component:selected", function(args) { args[1].set("resizable", true); });
const selected = editor.getSelected();
selected.remove({ temporary: true }); // temporary option will avoid removing component related styles
editor.getWrapper().append(selected, { at: 0 });