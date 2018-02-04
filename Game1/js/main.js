
var start = document.getElementById('loadwindow__start');
var exit = document.getElementById('exit');
var back = document.getElementById('back');

var modalwindow = document.getElementById('modalwindow');
var mainwindow = document.getElementById('mainwindow');

var islandwindow = document.getElementById('game_island');

var cliffs = document.getElementById('cliffs'); 
var cliffswindow = document.getElementById('game_cliffs');

var forest = document.getElementById('forest');
var forestwindow = document.getElementById('game_forest'); 

var pier = document.getElementById('pier');
var pierwindow = document.getElementById('game_pier');

var wood_extraction = document.getElementById('modalforest');
var stone_extraction = document.getElementById('modalcliffs');

var outstone = document.getElementById('outstone');
var outwood = document.getElementById('outwood');



start.onclick = function start() {
    modalwindow.style.display = 'none';
    mainwindow.style.display = 'block';
};

exit.onclick = function exit() {
    mainwindow.style.display = 'none';
    modalwindow.style.display = 'block';
};


//причал
pier.onclick = function openpier() {
    islandwindow.style.display = 'none';
    forestwindow.style.display = 'none';
    cliffswindow.style.display = 'none';
    pierwindow.style.display = 'block';
};


//лес
forest.onclick = function openforest() {
    islandwindow.style.display = 'none';
    cliffswindow.style.display = 'none';
    pierwindow.style.display = 'none';
    forestwindow.style.display = 'block';
};
wood_extraction.onclick = function click() {
    hba.classList.toggle('hba_up');
    pupils.classList.toggle('pupils');
    right_arm.classList.toggle('right_arm');
    first_right_arm.classList.toggle('first_right_arm');
};


//скалы
cliffs.onclick = function opencliffs() {
    islandwindow.style.display = 'none';
    forestwindow.style.display = 'none';
    pierwindow.style.display = 'none';
    cliffswindow.style.display = 'block';
};
stone_extraction.onclick = function click() {
    rightarm1.classList.toggle('right-arm-rotate');
    firstrightarm1.classList.toggle('first-right-arm-rotate');
    leftarm1.classList.toggle('left-arm-rotate');
    firstleftarm1.classList.toggle('first-left-arm-rotate');
};




back.onclick = function back() {
     if (forestwindow.style.display == 'block') {
        forestwindow.style.display = 'none';
        islandwindow.style.display = 'block';
    } if (cliffswindow.style.display == 'block') {
        cliffswindow.style.display = 'none';
        islandwindow.style.display = 'block';
    } if (pierwindow.style.display == 'block') {
        pierwindow.style.display = 'none';
        islandwindow.style.display = 'block';
    }
    
    };














