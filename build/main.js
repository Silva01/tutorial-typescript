requirejs.config({
    baseUrl: './',
    paths: {
        "app": "app"
    }
});

requirejs(['app'], function(){
    console.log("Carregando");
});