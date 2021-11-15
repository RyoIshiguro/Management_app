
 console.log("hello world");
 //document.write("んちゃ");
 //alert("んちゃ");

 function run() {
     console.log("excuted run");
 }


// var language = document.getElementById("language");

function testClick() {
    console.log('選択されたのは' + (language.value) + 'です');
}

var langSelect = document.getElementById("language");
langSelect.options[1].selected = true;

// let languageSelect = document.getElementById('language');
languageSelect.addEventListener('click', butotnClick);


//select bse name
function getBseName() {
    console.log('選択されたのは' + (bse.value) + 'です');
}


var selectBse = document.getElementById("bse");
selectBse.options[2].selected = true;

selectBse.addEventListener('click', butotnClick);
