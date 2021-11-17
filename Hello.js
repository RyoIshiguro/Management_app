
// test function
//  console.log("hello world");
 //document.write("んちゃ");
 //alert("んちゃ");

//  function run() {
//      console.log("excuted run");
//  }

// language selects 
function testClick() {
    console.log('選択されたのは' + (language.value) + 'です');
}

var langSelect = document.getElementById("language");


//select bse name
function getBseName() {
    console.log('選択されたのは' + (bse.value) + 'です');
}

var selectBse = document.getElementById("bse");


/* bse name array */
var arrayBse = ["斎藤","百瀨","鵜瀬"];
console.log(arrayBse);

document.getElementById("bseName").textContent = arrayBse[0];
// document.getElementById("bseName").textContent = "test";

function run(){
    for (var i=0; i<arrayBse.length; i++) {
        document.write(arrayBse[i] + "<br>");
    }
}

// create project table
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 3; i++) {
        
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("セルは "+i+" 行 "+j+" 列 です");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }

  