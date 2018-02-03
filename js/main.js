(function(){
    var LOCATION = {
        enterPage: 'enterPage',
        island: 'island',
        forest: 'forest',
        cliffs: 'cliffs',
        pier: 'pier'
    };

    var gameModel = {
        activeLocation: 'enterPage'
    };

    var startGameBtn = document.getElementById('loadwindow__start');
    var exitBtn = document.getElementById('exit');
    var backBtn = document.getElementById('back');

    var modalwindow = document.getElementById('modalwindow');
    var mainwindow = document.getElementById('mainwindow');

    var island = document.getElementById('game-island');

    var cliffs = document.getElementById('cliffs');
    var modalcliffs = document.getElementById('game-modalcliffs');

    var forest = document.getElementById('forest');
    var modalforest = document.getElementById('game-modalforest');

    var pier = document.getElementById('pier');
    var modalpier = document.getElementById('game-modalpier');

    // var tree = document.getElementById('tree');
    // var stone = document.getElementById('stone');

//Чар в лесу
    var rightarm = document.getElementById('right-arm');
    var firstrightarm = document.getElementById('first-right-arm');
    var leftarm = document.getElementById('left-arm');
    var firstleftarm = document.getElementById('first-left-arm');

//Чар на скалах
    var rightarm1 = document.getElementById('right-arm_1_');
    var firstrightarm1 = document.getElementById('first-right-arm_1_');
    var leftarm1 = document.getElementById('left-arm_1_');
    var firstleftarm1 = document.getElementById('first-left-arm_1_');



    var outstone = document.getElementById('outstone');
    var outwood = document.getElementById('outwood');


    startGameBtn.onclick = function() {
        startExitGame('enter');

        //todo set counters
    };

    exitBtn.onclick = function() {
        setLocationVisibility();
        startExitGame('exit');

        //todo clear counters
    };

    function startExitGame(action){
        modalwindow.classList.toggle('display-block');
        mainwindow.classList.toggle('display-block');
        island.classList.toggle('display-block');

        gameModel.activeLocation = (action === 'enter') ? LOCATION.island : LOCATION.enterPage;
    }
//лес
    forest.onclick = function () {
        gameModel.activeLocation = LOCATION.forest;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };

    // tree.onclick = function click() {
    //     rightarm.classList.toggle('right-arm-rotate');
    //     firstrightarm.classList.toggle('first-right-arm-rotate');
    //     leftarm.classList.toggle('left-arm-rotate');
    //     firstleftarm.classList.toggle('first-left-arm-rotate');
    // };


//скалы
    cliffs.onclick = function () {
        gameModel.activeLocation = LOCATION.cliffs;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };
    // stone.onclick = function click() {
    //     rightarm1.classList.toggle('right-arm-rotate');
    //     firstrightarm1.classList.toggle('first-right-arm-rotate');
    //     leftarm1.classList.toggle('left-arm-rotate');
    //     firstleftarm1.classList.toggle('first-left-arm-rotate');
    // };


//причал
    pier.onclick = function () {
        gameModel.activeLocation = LOCATION.pier;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };

    backBtn.onclick = function () {
        setBtnsIslandVisibility();
        setLocationVisibility();
        gameModel.activeLocation = LOCATION.island;
    };

    function setBtnsIslandVisibility(){
        island.classList.toggle('display-block');
        backBtn.parentElement.classList.toggle('inline-block');
        exitBtn.parentElement.classList.toggle('inline-block');
    }

    function setLocationVisibility(){
        switch (gameModel.activeLocation){
            case 'forest' : {
                modalforest.classList.toggle('display-block');
                break;
            }
            case 'cliffs' : {
                modalcliffs.classList.toggle('display-block');
                break;
            }
            case 'pier' : {
                modalpier.classList.toggle('display-block');
                break;
            }
        }
    }
})();
