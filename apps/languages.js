//Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");
//Language translations
var language = {
    cro: {
        home: "Početna"
    },
    eng: {
        home: "Home"
    },
    it:{
        home: "Casa"
    }
};
//Define language via window hash
if(window.location.hash){
    if(window.location.hash === "#cro"){
        homeLink.textContent = language.cro.home;
    }
    if(window.location.hash === "#eng"){
        homeLink.textContent = language.eng.home;
    }
    if(window.location.hash === "#it"){
        homeLink.textContent = language.it.home;
    }
}
//define language reload onClick illiteration
for (i = 0; i <= dataReload.length; i++){
    dataReload[i].onClick=function(){
        window.location.reload();
    };
}