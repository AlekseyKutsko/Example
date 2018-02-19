(function(appMethods){
    var LOCATION = {
        enterPage: 'enterPage',
        island: 'island',
        forest: 'forest',
        cliffs: 'cliffs',
        pier: 'pier'
    };

    var gameModel = {
        activeLocation: 'enterPage',
        activeAnimation: false,
        char: {
            armForest: 'axe_1',
            armCliffs: 'pick_1',
            strength: 0,
            intelligence: 0,
            agi: 0,
            woods: 0,
            allWoods: 0,
            rocks: 0,
            allRocks: 0,
            money: 0
        },
        eventStartHandler: null,
        eventEndHandler: null
    };

    var startGameBtn = document.getElementById('loadwindow__start');
    var exitBtn = document.getElementById('exit');
    var backBtn = document.getElementById('back');
    var charBtn = document.getElementById('char');

    var modalwindow = document.getElementById('modalwindow');
    var mainwindow = document.getElementById('mainwindow');

    var island = document.getElementById('game-island');

    var cliffs = document.getElementById('cliffs');
    var modalcliffs = document.querySelector('.game-modalcliffs');
    var gameCharCliffs = document.querySelector('#game-char-cliffs');
    var stone_extraction = document.getElementById('modalcliffs');

    var forest = document.getElementById('forest');
    var modalforest = document.querySelector('.game-modalforest');
    var gameCharForest = document.querySelector('#game-char-forest');
    var wood_extraction = document.getElementById('modalforest');

    var pier = document.getElementById('pier');
    var modalpier = document.querySelector('.game-modalpier');

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

    backBtn.onclick = function () {
        removeListenersHelper();
        setBtnsIslandVisibility();
        setLocationVisibility();
        gameModel.activeLocation = LOCATION.island;
    };
    // лес
    forest.onclick = function () {
        gameModel.activeLocation = LOCATION.forest;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armForest);
        setListeners(gameCharForest, options);
    };
    
    // Пилы
    var right_arm_saw = document.getElementById('right-arm_x5F_saw');
    var first_right_arm_saw = document.getElementById('first-right-arm_x5F_saw');
    var left_arm_saw = document.getElementById('left-arm_x5F_saw');
    var first_left_arm_saw = document.getElementById('first-left-arm_2_');

    var right_arm_saw2 = document.getElementById('right-arm_x5F_saw2');
    var first_right_arm_saw2 = document.getElementById('first-right-arm_x5F_saw2');
    var left_arm_saw2 = document.getElementById('left-arm_x5F_saw2');
    var first_left_arm_saw2 = document.getElementById('first-left-arm_7_');
    // gameCharForest.onmousedown = function() {
    //     gameAnimationCharSaw();
    // };
    // wood_extraction.onmousedown = function() {
    //     gameAnimationCharSaw();
    // };
    function gameAnimationCharSaw() {
        pupils.classList.add('pupils_saw');
        mouthsmile.classList.add('display-block');
        mouth.classList.add('display-block');

        right_arm_saw.classList.add('right_arm_saw');
        first_right_arm_saw.classList.add('first_right_arm_saw');
        left_arm_saw.classList.add('left_arm_saw');
        first_left_arm_saw.classList.add('first_left_arm_saw');

        right_arm_saw2.classList.add('right_arm_saw');
        first_right_arm_saw2.classList.add('first_right_arm_saw');
        left_arm_saw2.classList.add('left_arm_saw');
        first_left_arm_saw2.classList.add('first_left_arm_saw');
    };
    // gameCharForest.onmouseup = function() {
    //     gameAnimationCharSawUp();
    // };
    // wood_extraction.onmouseup = function() {
    //     gameAnimationCharSawUp();
    // };
    function gameAnimationCharSawUp() {
        pupils.classList.remove('pupils_saw');
        mouthsmile.classList.remove('display-block');
        mouth.classList.remove('display-block');

        right_arm_saw.classList.remove('right_arm_saw');
        first_right_arm_saw.classList.remove('first_right_arm_saw');
        left_arm_saw.classList.remove('left_arm_saw');
        first_left_arm_saw.classList.remove('first_left_arm_saw');

        right_arm_saw2.classList.remove('right_arm_saw');
        first_right_arm_saw2.classList.remove('first_right_arm_saw');
        left_arm_saw2.classList.remove('left_arm_saw');
        first_left_arm_saw2.classList.remove('first_left_arm_saw');
    };

// скалы
    cliffs.onclick = function () {
        gameModel.activeLocation = LOCATION.cliffs;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armCliffs);
        setListeners(gameCharCliffs, options);
    };
     // перфы
    var right_arm_perf = document.getElementById('right-arm_x5F_perf');
    var first_right_arm_perf = document.getElementById('first-right-arm_x5F_perf');
    var left_arm_perf = document.getElementById('left-arm_x5F_perf');
    var first_left_arm_perf = document.getElementById('first-left-arm_5_');

    var right_arm_perf2 = document.getElementById('right-arm_x5F_perf2');
    var first_right_arm_perf2 = document.getElementById('first-right-arm_x5F_perf2');
    var left_arm_perf2 = document.getElementById('left-arm_x5F_perf2');
    var first_left_arm_perf2 = document.getElementById('first-left-arm_6_');

    // gameCharCliffs.onmousedown = function() {
    //     gameAnimationCharPerf();
    // };
    // stone_extraction.onmousedown = function() {
    //     gameAnimationCharPerf();
    // };
    function gameAnimationCharPerf() {
        pupils2.classList.add('pupils_saw');
        mouthsmile2.classList.add('display-block');

        right_arm_perf.classList.add('right_arm_perf');
        first_right_arm_perf.classList.add('first_right_arm_perf');
        left_arm_perf.classList.add('left_arm_perf');
        first_left_arm_perf.classList.add('first_left_arm_perf');

        right_arm_perf2.classList.add('right_arm_perf');
        first_right_arm_perf2.classList.add('first_right_arm_perf');
        left_arm_perf2.classList.add('left_arm_perf');
        first_left_arm_perf2.classList.add('first_left_arm_perf');
    }

    // gameCharCliffs.onmouseup = function() {
    //     gameAnimationCharPerfUp();
    // };
    // stone_extraction.onmouseup = function() {
    //     gameAnimationCharPerfUp();
    // };
    function gameAnimationCharPerfUp() {
        pupils2.classList.remove('pupils_saw');
        mouthsmile2.classList.remove('display-block');

        right_arm_perf.classList.remove('right_arm_perf');
        first_right_arm_perf.classList.remove('first_right_arm_perf');
        left_arm_perf.classList.remove('left_arm_perf');
        first_left_arm_perf.classList.remove('first_left_arm_perf');

        right_arm_perf2.classList.remove('right_arm_perf');
        first_right_arm_perf2.classList.remove('first_right_arm_perf');
        left_arm_perf2.classList.remove('left_arm_perf');
        first_left_arm_perf2.classList.remove('first_left_arm_perf');
    };



//причал
    var dealer = document.getElementById('game-dealer');
    var menuDealer = document.getElementById('game-menu-dealer');
    var closeMenuDealer = document.getElementById('btn-close_x5F_menu');

    pier.onclick = function () {
        gameModel.activeLocation = LOCATION.pier;
        setBtnsIslandVisibility();
        setLocationVisibility();
    };
    // меню торговца
        // продажа
    var quantityWoodSell = document.getElementById('quantity-wood_x5F_sell');
    var moneyWoodSell = document.getElementById('money-wood_x5F_sell');
    var btnMinusWoodSell = document.getElementById('minus-wood_x5F_sell');
    var btnPlusWoodSell = document.getElementById('plus-wood_x5F_sell');
    var btnSellWood = document.getElementById('btn-sell_x5F_wood');

    var quantityStoneSell = document.getElementById('quantity-stone_x5F_sell');
    var moneyStoneSell = document.getElementById('money-stone_x5F_sell');
    var btnMinusStoneSell = document.getElementById('minus-stone_x5F_sell');
    var btnPlusStoneSell = document.getElementById('plus-stone_x5F_sell');
    var btnSellStone = document.getElementById('btn-sell_x5F_stone');
        // покупка
    var quantityWoodBuy = document.getElementById('quantity-wood_x5F_buy');
    var moneyWoodBuy = document.getElementById('money-wood_x5F_buy');
    var btnMinusWoodBuy = document.getElementById('minus-wood_x5F_buy');
    var btnPlusWoodBuy = document.getElementById('plus-wood_x5F_buy');
    var btnBuyWood = document.getElementById('btn-buy_x5F_wood');

    var quantityStoneSell = document.getElementById('quantity-stone_x5F_buy');
    var moneyStoneSell = document.getElementById('money-stone_x5F_buy');
    var btnMinusStoneBuy = document.getElementById('minus-stone_x5F_buy');
    var btnPlusStoneBuy = document.getElementById('plus-stone_x5F_buy');
    var btnBuyStone = document.getElementById('btn-buy_x5F_stone');

    var btnBuyEx2 = document.getElementById('btn-buy_x5F_ex2');
    var btnBuyEx3 = document.getElementById('btn-buy_x5F_ex3');
    var btnBuySaw = document.getElementById('btn-buy_x5F_saw');
    var btnBuyEx4 = document.getElementById('btn-buy_x5F_ex4');
    var btnBuyEx5 = document.getElementById('btn-buy_x5F_ex5');
    var btnBuySaw2 = document.getElementById('btn-buy_x5F_saw2');
    var btnBuyPick2 = document.getElementById('btn-buy_x5F_pick2');
    var btnBuyPick3 = document.getElementById('btn-buy_x5F_pick3');
    var btnBuyPerf = document.getElementById('btn-buy_x5F_perf');
    var btnBuyPick4 = document.getElementById('btn-buy_x5F_pick4');
    var btnBuyPick5 = document.getElementById('btn-buy_x5F_pick5');
    var btnBuyPerf2 = document.getElementById('btn-buy_x5F_perf2');

    dealer.onclick = function () {
        menuDealer.style.display = 'block';
    };
    closeMenuDealer.onclick = function () {
        menuDealer.style.display = 'none';
    };

    // меню персонажа
    var menuChar = document.getElementById('game-menu-char');
    charBtn.onclick = function () {
        menuChar.classList.toggle('display-block');
    };

    // methods
    function actionStartHelper(options){
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(gameModel.char.armForest.indexOf('axe') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armForest.indexOf('saw') !== -1){

                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){

                }
                break;
            }
        }
    }

    function actionEndHelper(options) {
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(gameModel.char.armForest.indexOf('axe') !== -1){

                } else if(gameModel.char.armForest.indexOf('saw') !== -1){

                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){

                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){

                }
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function setListeners(char, options){
        gameModel.eventStartHandler = function () {
            actionStartHelper(options);
        };

        gameModel.eventEndHandler = function () {
            actionEndHelper(options);
        };

        char.addEventListener('touchstart', gameModel.eventStartHandler);
        char.addEventListener('touchend', gameModel.eventEndHandler);
    }

    function removeListeners(char){
        char.removeEventListener('touchstart', gameModel.eventStartHandler);
        char.removeEventListener('touchend', gameModel.eventEndHandler);

        gameModel.eventStartHandler = null;
        gameModel.eventEndHandler = null;
    }

    function getOptionsAnimation(arm) {
        var _result, _rightArm;
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(arm.indexOf('axe') !== -1){
                    switch (arm){
                        case 'axe_1': {
                            _rightArm = document.getElementById('first-right-arm_3_');
                            break;
                        }

                        case 'axe_2': {
                            _rightArm = document.getElementById('first-right-arm_x5F_ex2');
                            break;
                        }

                        case 'axe_3': {
                            _rightArm = document.getElementById('first-right-arm_x5F_ex3');
                            break;
                        }

                        case 'axe_4': {
                            _rightArm = document.getElementById('first-right-arm_x5F_ex4');
                            break;
                        }

                        case 'axe_5': {
                            _rightArm = document.getElementById('first-right-arm_x5F_ex5');
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_1_'),
                        mouthsmile: document.getElementById('mouthsmile_1_'),
                        mouth: document.getElementById('mouth'),
                        right_arm: document.getElementById('right-arm_x5F_ex'),
                        first_right_arm: _rightArm,
                        left_arm: document.getElementById('left-arm_3_'),
                        first_left_arm: document.getElementById('first-left-arm_3_'),
                        delay: 2000
                    };

                } else if(arm.indexOf('saw') !== -1){
                    //todo saw
                }

                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    switch (arm){
                        case 'pick_1': {
                            _rightArm = document.getElementById('first-right-arm_4_');
                            break;
                        }

                        case 'pick_2': {
                            _rightArm = document.getElementById('first-right-arm_x5F_pick2');
                            break;
                        }

                        case 'pick_3': {
                            _rightArm = document.getElementById('first-right-arm_x5F_pick3');
                            break;
                        }

                        case 'pick_4': {
                            _rightArm = document.getElementById('first-right-arm_x5F_pick4_1_');
                            break;
                        }

                        case 'pick_5': {
                            _rightArm = document.getElementById('first-right-arm_x5F_pick5');
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_3_'),
                        mouthsmile: document.getElementById('mouthsmile_3_'),
                        mouth: document.getElementById('mouth_1_'),
                        right_arm: document.getElementById('right-armpick_1_'),
                        first_right_arm: _rightArm,
                        left_arm: document.getElementById('left-arm_2_'),
                        first_left_arm: document.getElementById('first-left-arm_4_'),
                        delay: 2000
                    };
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    //todo perf
                }
                break;
            }
        }

        return _result;
    }

    function gameAnimationCharLevel1(options) {
        if(!gameModel.activeAnimation){
            gameModel.activeAnimation = true;

            options.pupils.classList.toggle('pupils');
            options.mouthsmile.classList.toggle('display-block');
            options.mouth.classList.toggle('display-block');
            options.right_arm.classList.toggle('right_armex');
            options.first_right_arm.classList.toggle('first_right_armex');
            options.left_arm.classList.toggle('left_armex');
            options.first_left_arm.classList.toggle('first_left_armex');

            setTimeout(function(){
                gameModel.activeAnimation = false;

                options.pupils.classList.toggle('pupils');
                options.mouthsmile.classList.toggle('display-block');
                options.mouth.classList.toggle('display-block');
                options.right_arm.classList.toggle('right_armex');
                options.first_right_arm.classList.toggle('first_right_armex');
                options.left_arm.classList.toggle('left_armex');
                options.first_left_arm.classList.toggle('first_left_armex');
            }, options.delay);
        }
    }

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

    function removeListenersHelper(){
        switch (gameModel.activeLocation){
            case 'forest' : {
                removeListeners(gameCharForest);
                break;
            }
            case 'cliffs' : {
                removeListeners(gameCharCliffs);
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }
    
})(appMethods);
