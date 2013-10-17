requirejs.config({

    baseUrl: 'js/',

    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'fancybox.pack': '../bower_components/fancybox/source/jquery.fancybox.pack',
        'fancybox-buttons': '../bower_components/fancybox/source/helpers/jquery.fancybox-buttons',
        'fancybox-media': '../bower_components/fancybox/source/helpers/jquery.fancybox-media',
        'fancybox-thumbs': '../bower_components/fancybox/source/helpers/jquery.fancybox-thumbs'
    },
    
    shim: {
        'fancybox': {
            deps: ['fancybox.pack', 'fancybox-buttons', 'fancybox-media', 'fancybox-thumbs']
        },
        'fancybox-buttons': {
            deps: ['fancybox.pack']
        },
        'fancybox-media': {
            deps: ['fancybox.pack']
        },
        'fancybox-thumbs': {
            deps: ['fancybox.pack']
        }
    }
});

require(["fancybox"], function() {

    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

});
