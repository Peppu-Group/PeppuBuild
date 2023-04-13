
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

editor.Panels.addButton('options',
    [{
        id: 'save', className: 'fa fa-floppy-o icon-blank',
        command: function (editor1, sender) { alert('Hello World') },
        attributes: { title: 'Save Template' }
    },]);