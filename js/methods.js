var appMethods = (function(){
    var setLocalStorageData = function(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    };

    var getLocalStorageData = function(key){
        return (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : null;
    };

    var clearLocalStorageData = function(key){
        localStorage.removeItem(key);
    };

    return {
        setLocalStorageData: setLocalStorageData,
        getLocalStorageData: getLocalStorageData,
        clearLocalStorageData: clearLocalStorageData
    }
})();