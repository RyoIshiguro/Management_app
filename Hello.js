
 console.log("hello world");
 //document.write("んちゃ");
 //alert("んちゃ");

 function run() {
     console.log("excuted run");
 }

 function setBseName(){
     document.getElementById("bseName").innerText = document.getElementById("斎藤");
 }


// var bse = ['斎藤','百瀨','鵜瀬'];
// console.log(bse);

var bse =document.getElementById("bseName");

function getBseName() {
    bse.textContent = "BSEを選択しました。";
}