Package.describe({
    name: 'polyroid:paper-styles',
    version: '1.0.12',
    summary: 'Common (global) styles for Material Design elements.',
    git: 'https://github.com/Polyroid/paper-styles.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-flex-layout@1.0.0',
        'polyroid:font-roboto@1.0.0',
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'classes/global.html',
        'classes/shadow.html',
        'classes/shadow-layout.html',
        'classes/typography.html',
        'color.html',
        'default-theme.html',
        'paper-styles.html',
        'paper-styles-classes.html',
        'shadow.html',
        'typography.html'
    ], 'client');
});
