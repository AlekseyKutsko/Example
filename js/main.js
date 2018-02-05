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

    var wood_extraction = document.getElementById('modalforest');
    var stone_extraction = document.getElementById('modalcliffs');





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
    var pupils = document.getElementById('pupils');
    var right_arm = document.getElementById('right-armex');
    var first_right_arm = document.getElementById('first-right-arm');
    var left_arm = document.getElementById('left-arm');
    var first_left_arm = document.getElementById('first-left-arm');
    wood_extraction.onclick = function click() {
        pupils.classList.toggle('pupils');
        right_arm.classList.toggle('right_armex');
        first_right_arm.classList.toggle('first_right_arm');
        left_arm.classList.toggle('left_arm');
        first_left_arm.classList.toggle('first_left_arm');
};

//скалы
    cliffs.onclick = function () {
        gameModel.activeLocation = LOCATION.cliffs;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };
    var pupils2 = document.getElementById('pupils2');
    var right_arm2 = document.getElementById('right-armpick');
    var first_right_arm2 = document.getElementById('first-right-arm2');
    var left_arm2 = document.getElementById('left-arm2');
    var first_left_arm2 = document.getElementById('first-left-arm2');
    stone_extraction.onclick = function click() {
        pupils2.classList.toggle('pupils');
        right_arm2.classList.toggle('right_armex');
        first_right_arm2.classList.toggle('first_right_arm');
        left_arm2.classList.toggle('left_arm');
        first_left_arm2.classList.toggle('first_left_arm');
};


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
