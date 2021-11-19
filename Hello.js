
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
var arrayBse = ["斎藤",
                "百瀨",
                "鵜瀬",
                "上林",
                "留奥",
                "亜子",
                "石黒",
                "中田",
                "Yen",
                "Patrick",
                "西田"
                ];
console.log(arrayBse);

document.getElementById("bseName").textContent = arrayBse[0];
// document.getElementById("bseName").textContent = "test";

function run(){
    for (var i=0; i<arrayBse.length; i++) {
        document.write(arrayBse[i] + "<br>");
    }
}

//
// project table title
var arrayProjectTabTitle = [
    "プロジェクト名",
    "契約タイプ",
    "工数",
    "OPCO",
    "SPM",
    "PM",
    "BA",
    "SA",
    "開発者",
    "テスター",
    "BSE",
    "営業",
    "シグナル",
    "アクションアイテム",
    "備考",
    "追加",
    "編集",
    "更新",
    "アーカイブ"
];

// create project table
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 2; i++) {
        
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 19; j++) {
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



//create table element
var table = document.createElement("table");

//create <br> element
var br = document.createElement("br");

// bse table title
var arrayBseTabTitle = [
                        "BSE",
                        "プロジェクト数"
                    ];

//loop of <tr> part 
for (var row=0; row<2; row++){
    //generate <tr> element 
    var tr = document.createElement("tr");
    //loop of <th> <td> part 
    for (var column=0; column<arrayBseTabTitle.length; column++) {
        //<tr> of row 1
        if (row === 0) {
            //generate <th> 
            var th = document.createElement("th");
            //add text in <th>
            th.textContent = arrayBseTabTitle[column];
            //add <th> as <tr> 's child element
            tr.appendChild(th);    
        }else{
            //generate <td>
            var td = document.createElement("td");
            //add text in <td>
            td.textContent = "tsst";
            //add <td> as <tr>'s child element
            tr.appendChild(td);
        }
    }
    //add <tr> as <table>'s child
    table.appendChild(tr);
}

//add genarated table 
document.getElementById("makeBseTab").appendChild(table);  
document.getElementById("makeBseTab").appendChild(br);  
  