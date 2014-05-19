
function start(){


/*
    node = document.getElementById("1");
    node.appendChild(createTab()).;
    node.insertBefore
*/

}


function createTab(){
    // erstellung einer Tabelle

    var myTabBody = document.createElement('tbody');
    document.getElementById("table").appendChild(myTabBody);
    for(var i=0;i<4;i++){
        var myRow = document.createElement('tr');
        for(var j=0;j<4;j++){
            var myCell = document.createElement('td');
            currenttext = document.createTextNode("hi");
            myCell.appendChild(currenttext);
            myRow.appendChild(myCell);
        }
        myTabBody.appendChild(myRow);
    }

}

/*function clear(){
    if(node()){
    tbl=document.getElementById('daten');

    while(tbl.rows.length>0)
    {
        tbl.deleteRow(0);
    }
    }
}
*/
