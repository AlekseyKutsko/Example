(function(appMethods){
    var LOCATION = {
        enterPage: 'enterPage',
        island: 'island',
        forest: 'forest',
        cliffs: 'cliffs',
        sea: 'sea',
        pier: 'pier'
    };

    var ARMS_IDS = {
        'axe_1': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_3_'],
        'axe_2': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex2'],
        'axe_3': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex3'],
        'axe_4': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex4'],
        'axe_5': ['right-arm_x5F_ex', 'left-arm_3_', 'first-left-arm_3_', 'first-right-arm_x5F_ex5'],

        'saw_1': ['right-arm_x5F_saw', 'left-arm_x5F_saw', 'first-right-arm_x5F_saw', 'first-left-arm_2_'],
        'saw_2': ['right-arm_x5F_saw2', 'left-arm_x5F_saw2', 'first-right-arm_x5F_saw2', 'first-left-arm_7_'],

        'pick_1': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_4_'],
        'pick_2': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick2'],
        'pick_3': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick3'],
        'pick_4': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick4_1_'],
        'pick_5': ['right-armpick_1_', 'left-arm_2_', 'first-left-arm_4_', 'first-right-arm_x5F_pick5'],

        'perf_1': ['right-arm_x5F_perf', 'left-arm_x5F_perf', 'first-right-arm_x5F_perf', 'first-left-arm_5_'],
        'perf_2': ['right-arm_x5F_perf2', 'left-arm_x5F_perf2', 'first-right-arm_x5F_perf2', 'first-left-arm_6_'],

        'bucket_1': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket_1_', 'first-left-arm_8_'],
        'bucket_2': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket2_2_', 'first-left-arm_8_'],
        'bucket_3': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket3_1_', 'first-left-arm_8_'],
        'bucket_4': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket4', 'first-left-arm_8_'],
        'bucket_5': ['right-arm_x5F_bucket_1_', 'left-arm_4_', 'first-right-arm_x5F_bucket5', 'first-left-arm_8_'],

        'pump_1': ['right-arm_x5F_pump', 'left-arm_x5F_pump', 'first-right-arm_x5F_pump', 'first-left-arm_1_', 'handle'],
        'pump_2': ['right-arm_x5F_pump2', 'left-arm_x5F_pump', 'first-right-arm_x5F_pump2', 'first-left-arm_1_', 'handle2']
    };

    var gameModel = {
        activeLocation: 'enterPage',
        activeAnimation: null,
        timeOutAnimation: null,
        char: {
            armForest: null,
            armCliffs: null,
            armSea: null,
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
    var menuBagItems = document.getElementById('bag_x5F_char');
    var menuChar = document.getElementById('game-menu-char');

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

    var sea = document.getElementById('sea');
    var modalsea = document.querySelector('.game-modalsea');
    var gameCharSea = document.querySelector('#game-char-sea');
    var water_extraction = document.getElementById('modalsea');

    var pier = document.getElementById('pier');
    var modalpier = document.querySelector('.game-modalpier');

    var outstone = document.getElementById('outstone');
    var outwood = document.getElementById('outwood');

    setArmAfterStartGame();

    startGameBtn.onclick = function() {
        startExitGame('enter');

        //todo set counters
    };

    exitBtn.onclick = function() {
        setLocationVisibility();
        startExitGame('exit');

        //todo clear counters
    };

    menuBagItems.addEventListener('touchstart', function(evt){
        var _item = findGElement(evt.target),
            _itemId = _item.getAttribute('id');

        if(_item.classList.contains('arm-forest')){
            processingArmForestMenu(_itemId);
        } else if(_item.classList.contains('arm-cliffs')){
            processingArmCliffsMenu(_itemId);
        } else if(_item.classList.contains('arm-sea')){
            processingArmSeaMenu(_itemId);
        }

        setVisibilityArm(gameModel.char);
        menuChar.classList.toggle('display-block');
    });

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
        //stop animation
        if(gameModel.activeAnimation){
            gameModel.activeAnimation.pupils.classList.toggle('pupils');
            gameModel.activeAnimation.mouthsmile.classList.toggle('display-block');
            gameModel.activeAnimation.mouth.classList.toggle('display-block');

            gameModel.activeAnimation.right_arm.DOM.classList.toggle(gameModel.activeAnimation.right_arm.animationClass);
            gameModel.activeAnimation.first_right_arm.DOM.classList.toggle(gameModel.activeAnimation.first_right_arm.animationClass);
            gameModel.activeAnimation.left_arm.DOM.classList.toggle(gameModel.activeAnimation.left_arm.animationClass);
            gameModel.activeAnimation.first_left_arm.DOM.classList.toggle(gameModel.activeAnimation.first_left_arm.animationClass);
            gameModel.activeAnimation = null;
            clearTimeout(gameModel.timeOutAnimation);
        }
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
    // скалы
    cliffs.onclick = function () {
        gameModel.activeLocation = LOCATION.cliffs;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armCliffs);
        setListeners(gameCharCliffs, options);
    };
    // озеро
    sea.onclick = function () {
        gameModel.activeLocation = LOCATION.sea;
        setBtnsIslandVisibility();
        setLocationVisibility();

        var options = getOptionsAnimation(gameModel.char.armSea);
        setListeners(gameCharSea, options);
    };
    //причал
    var dealer = document.getElementById('game-dealer');
    var menuDealer = document.getElementById('game-menu-dealer');
    var closeMenuDealer = document.getElementById('btn-close_x5F_menu_1_');

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
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
             case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                    gameAnimationCharLevel1(options);
                } else if(gameModel.char.armSea.indexOf('pupm') !== -1){
                    gameAnimationCharLevel2Down(options);
                }
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function actionEndHelper(options) {
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(gameModel.char.armForest.indexOf('axe') !== -1){

                } else if(gameModel.char.armForest.indexOf('saw') !== -1){
                    gameAnimationCharLevel2Up(options);
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){

                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    gameAnimationCharLevel2Up(options);
                }
                break;
            }
            case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                   
                } else if(gameModel.char.armSea.indexOf('pupm') !== -1){
                    gameAnimationCharLevel2Up(options);
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
        var _result, _rightArm, _leftArm, _firstRightArm, _firstLeftArm, _handleArm;
        switch (gameModel.activeLocation){
            case 'forest' : {
                if(arm.indexOf('axe') !== -1){
                    switch (arm){
                        case 'axe_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_3_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex2'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex3'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex4'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'axe_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_ex5'), animationClass: 'first_right_armex'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_3_'), animationClass: 'left_armex'};
                    _rightArm = {DOM: document.getElementById('right-arm_x5F_ex'), animationClass: 'right_armex'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_3_'), animationClass: 'first_left_armex'};

                    _result = {
                        pupils: document.getElementById('pupils_1_'),
                        mouthsmile: document.getElementById('mouthsmile_1_'),
                        mouth: document.getElementById('mouth'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        delay: 2000
                    };

                } else if(arm.indexOf('saw') !== -1){
                    switch (arm){
                        case 'saw_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_saw'), animationClass: 'right_arm_saw'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_saw'), animationClass: 'left_arm_saw'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_saw'), animationClass: 'first_right_arm_saw'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_2_'), animationClass: 'first_left_arm_saw'};
                            break;
                        }

                        case 'saw_2': {
                            _rightArm =  {DOM: document.getElementById('right-arm_x5F_saw2'), animationClass: 'right_arm_saw'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_saw2'), animationClass: 'left_arm_saw'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_saw2'), animationClass: 'first_right_arm_saw'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_7_'), animationClass: 'first_left_arm_saw'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_1_'),
                        mouthsmile: document.getElementById('mouthsmile_1_'),
                        mouth: document.getElementById('mouth'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        delay: 2000
                    };
                }
                break;
            }
            case 'cliffs' : {
                if(gameModel.char.armCliffs.indexOf('pick') !== -1){
                    switch (arm){
                        case 'pick_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_4_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick2'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick3'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick4_1_'), animationClass: 'first_right_armex'};
                            break;
                        }

                        case 'pick_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pick5'), animationClass: 'first_right_armex'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_2_'), animationClass: 'left_armex'};
                    _rightArm = {DOM: document.getElementById('right-armpick_1_'), animationClass: 'right_armex'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_4_'), animationClass: 'first_left_armex'};

                    _result = {
                        pupils: document.getElementById('pupils_3_'),
                        mouthsmile: document.getElementById('mouthsmile_3_'),
                        mouth: document.getElementById('mouth_1_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        delay: 2000
                    };
                } else if(gameModel.char.armCliffs.indexOf('perf') !== -1){
                    switch (arm){
                        case 'perf_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_perf'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_perf'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_perf'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_5_'), animationClass: 'first_left_arm_perf'};
                            break;
                        }

                        case 'perf_2': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_perf2'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_perf2'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_perf2'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_6_'), animationClass: 'first_left_arm_perf'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_3_'),
                        mouthsmile: document.getElementById('mouthsmile_3_'),
                        mouth: document.getElementById('mouth_1_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        delay: 2000
                    };
                }
                break;
            }
            case 'sea' : {
                if(gameModel.char.armSea.indexOf('bucket') !== -1){
                    switch (arm){
                        case 'bucket_1': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket_1_'), animationClass: 'first_right_arm_bucket'};
                            break;
                        }

                        case 'bucket_2': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket2_2_'), animationClass: 'first_right_arm_bucket'};
                            break;
                        }

                        case 'bucket_3': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket3_1_'), animationClass: 'first_right_arm_bucket'};
                            break;
                        }

                        case 'bucket_4': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket4'), animationClass: 'first_right_arm_bucket'};
                            break;
                        }

                        case 'bucket_5': {
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_bucket5'), animationClass: 'first_right_arm_bucket'};
                            break;
                        }
                    }

                    _leftArm = {DOM: document.getElementById('left-arm_4_'), animationClass: 'left_arm_bucket'};
                    _rightArm = {DOM: document.getElementById('right-arm_x5F_bucket_1_'), animationClass: 'right_arm_bucket'};
                    _firstLeftArm = {DOM: document.getElementById('first-left-arm_8_'), animationClass: 'first_left_arm_bucket'};

                    _result = {
                        pupils: document.getElementById('pupils_2_'),
                        mouthsmile: document.getElementById('mouthsmile_2_'),
                        mouth: document.getElementById('mouth_2_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        delay: 2000
                    };
                } else if(gameModel.char.armSea.indexOf('pump') !== -1){
                    switch (arm){
                        case 'pump_1': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_pump'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_pump'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pump'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_1_'), animationClass: 'first_left_arm_perf'};
                            _handleArm = {DOM: document.getElementById('handle'), animationClass: 'first_left_arm_perf'};
                            break;
                        }

                        case 'pump_2': {
                            _rightArm = {DOM: document.getElementById('right-arm_x5F_pump2'), animationClass: 'right_arm_perf'};
                            _leftArm = {DOM: document.getElementById('left-arm_x5F_pump'), animationClass: 'left_arm_perf'};
                            _firstRightArm = {DOM: document.getElementById('first-right-arm_x5F_pump2'), animationClass: 'first_right_arm_perf'};
                            _firstLeftArm = {DOM: document.getElementById('first-left-arm_1_'), animationClass: 'first_left_arm_perf'};
                            _handleArm = {DOM: document.getElementById('handle2'), animationClass: 'first_left_arm_perf'};
                            break;
                        }
                    }

                    _result = {
                        pupils: document.getElementById('pupils_2_'),
                        mouthsmile: document.getElementById('mouthsmile_2_'),
                        mouth: document.getElementById('mouth_2_'),
                        right_arm: _rightArm,
                        first_right_arm: _firstRightArm,
                        left_arm: _leftArm,
                        first_left_arm: _firstLeftArm,
                        handleArm: _handleArm,
                        delay: 2000
                    };
                }
                break;
            }
        }

        return _result;
    }

    function gameAnimationCharLevel1(options) {
        if(!gameModel.activeAnimation){
            gameModel.activeAnimation = options;

            options.pupils.classList.toggle('pupils');
            options.mouthsmile.classList.toggle('display-block');
            options.mouth.classList.toggle('display-block');

            options.right_arm.DOM.classList.toggle(options.right_arm.animationClass);
            options.first_right_arm.DOM.classList.toggle(options.first_right_arm.animationClass);
            options.left_arm.DOM.classList.toggle(options.left_arm.animationClass);
            options.first_left_arm.DOM.classList.toggle(options.first_left_arm.animationClass);

            gameModel.timeOutAnimation = setTimeout(function(){
                gameModel.activeAnimation = null;

                options.pupils.classList.toggle('pupils');
                options.mouthsmile.classList.toggle('display-block');
                options.mouth.classList.toggle('display-block');

                options.right_arm.DOM.classList.toggle(options.right_arm.animationClass);
                options.first_right_arm.DOM.classList.toggle(options.first_right_arm.animationClass);
                options.left_arm.DOM.classList.toggle(options.left_arm.animationClass);
                options.first_left_arm.DOM.classList.toggle(options.first_left_arm.animationClass);
            }, options.delay);
        }
    }

    function gameAnimationCharLevel2Down(options){
        options.pupils.classList.add('pupils_saw');
        options.mouthsmile.classList.add('display-block');
        options.mouth.classList.add('display-block');

        options.right_arm.DOM.classList.add(options.right_arm.animationClass);
        options.first_right_arm.DOM.classList.add(options.first_right_arm.animationClass);
        options.left_arm.DOM.classList.add(options.left_arm.animationClass);
        options.first_left_arm.DOM.classList.add(options.first_left_arm.animationClass);
        if(options.handleArm){
            options.handleArm.DOM.classList.add(options.handleArm.animationClass);
        }
    }

    function gameAnimationCharLevel2Up(options){
        options.pupils.classList.remove('pupils_saw');
        options.mouthsmile.classList.remove('display-block');
        options.mouth.classList.remove('display-block');

        options.right_arm.DOM.classList.remove(options.right_arm.animationClass);
        options.first_right_arm.DOM.classList.remove(options.first_right_arm.animationClass);
        options.left_arm.DOM.classList.remove(options.left_arm.animationClass);
        options.first_left_arm.DOM.classList.remove(options.first_left_arm.animationClass);
        if(options.handleArm) {
            options.handleArm.DOM.classList.add(options.handleArm.animationClass);
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
            case 'sea' : {
                modalsea.classList.toggle('display-block');
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
            case 'sea' : {
                removeListeners(gameCharSea);
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function setArmAfterStartGame(data){
        if(data){

        } else {
            gameModel.char.armForest = 'axe_1';
            gameModel.char.armCliffs = 'pick_1';
            gameModel.char.armSea = 'bucket_1';
            setVisibilityArm(gameModel.char);
        }
    }

    function setVisibilityArm(char){
        hideAllArms();
        removeListenersHelper();
        ARMS_IDS[char.armForest].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });
        ARMS_IDS[char.armCliffs].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });
        ARMS_IDS[char.armSea].forEach(function(id){
            document.getElementById(id).classList.toggle('display-block');
        });

        switch(gameModel.activeLocation){
            case 'forest' : {
                var optionsAnimForest = getOptionsAnimation(char.armForest);
                setListeners(gameCharForest, optionsAnimForest);
                break;
            }
            case 'cliffs' : {
                var optionsAnimCliffs = getOptionsAnimation(gameModel.char.armCliffs);
                setListeners(gameCharCliffs, optionsAnimCliffs);
                break;
            }
            case 'sea' : {
                var optionsAnimSea = getOptionsAnimation(gameModel.char.armSea);
                setListeners(gameCharSea, optionsAnimSea);
                break;
            }
            case 'pier' : {

                break;
            }
        }
    }

    function processingArmForestMenu(id){
        switch(id){
            case 'ex-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_1';
                break;
            }
            case 'ex2-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_2';
                break;
            }
            case 'ex3-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_3';
                break;
            }
            case 'ex4-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_4';
                break;
            }
            case 'ex5-pick_x5F_bag' : {
                gameModel.char.armForest = 'axe_5';
                break;
            }
            case 'saw-pick_x5F_bag' : {
                gameModel.char.armForest = 'saw_1';
                break;
            }
            case 'saw2-pick_x5F_bag_1_' : {
                gameModel.char.armForest = 'saw_2';
                break;
            }
        }
    }

    function processingArmCliffsMenu(id){
        switch(id){
            case 'pick-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_1';
                break;
            }
            case 'pick2-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_2';
                break;
            }
            case 'pick3-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_3';
                break;
            }
            case 'pick4-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_4';
                break;
            }
            case 'pick5-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'pick_5';
                break;
            }
            case 'perf-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'perf_1';
                break;
            }
            case 'perf2-pick_x5F_bag' : {
                gameModel.char.armCliffs = 'perf_2';
                break;
            }
        }
    }

    function processingArmSeaMenu(id){
        switch(id){
            case 'bucket-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_1';
                break;
            }
            case 'bucket2-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_2';
                break;
            }
            case 'bucket3-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_3';
                break;
            }
            case 'bucket4-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_4';
                break;
            }
            case 'bucket5-pick_x5F_bag' : {
                gameModel.char.armSea = 'bucket_5';
                break;
            }
            case 'pump-pick_x5F_bag' : {
                gameModel.char.armSea = 'pump_1';
                break;
            }
            case 'pump2-pick_x5F_bag' : {
                gameModel.char.armSea = 'pump_2';
                break;
            }
        }
    }

    function hideAllArms(){
        var _allArmsItems = document.querySelectorAll('.char-hand-part');

        _allArmsItems.forEach(function(item){
            if(item.classList.contains('display-block')){
                item.classList.toggle('display-block');
            }
        })
    }

    function findGElement(elem){
        var _elem = elem;

        while(!_elem.classList.contains('bag-arm-item')){
            _elem = _elem.parentElement;
        }

        return _elem;
    }
    
})(appMethods);
