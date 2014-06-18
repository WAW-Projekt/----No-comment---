var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'datesForContributors.js';
head.appendChild(script);


var head2= document.getElementsByTagName('head')[1];
var script2 = document.createElement('script');
script2.type= 'text/javascript';
script.src= 'datesForFairs.js';
head2.appendChild(script2);



// erstellung einer Tabelle
function createcebitTab(){

    var conhi = document.getElementById('conhit');
    conhi.removeAttribute('class');
    var webtechco = document.getElementById('webtechcon');
    webtechco.removeAttribute('class');

    clear();

    var th = document.getElementById("cebit");
    th.setAttribute('class','secondselected');

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);


    var row1 = document.createElement('tr');
    row1.setAttribute('class','blue');


    var myCell1 = document.createElement('td');
    text1 = document.createTextNode("Nachname");
    myCell1.appendChild(text1);
    row1.appendChild(myCell1);

    var myCell2 = document.createElement('td');
    text2 = document.createTextNode("Name");
    myCell2.appendChild(text2);
    row1.appendChild(myCell2);

    var myCell3 = document.createElement('td');
    text3 = document.createTextNode("Studiengang");
    myCell3.appendChild(text3);
    row1.appendChild(myCell3);

    var myCell4 = document.createElement('td');
    text4 = document.createTextNode("E-mail");
    myCell4.appendChild(text4);
    row1.appendChild(myCell4);

    myTabBody.appendChild(row1);


    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<ceBitTeilnehmer.CB.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
       // for(var j=0;j<5;j++){

            var myCell = document.createElement('td');
            myCell.setAttribute('width','20%');
            myCell.setAttribute('height','20');
            currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].name);
            myCell.appendChild(currenttext);
            myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        myCell.setAttribute('width','20%');
            myCell.setAttribute('height','20');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        myCell.setAttribute('width','20%');
            myCell.setAttribute('height','20');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        myCell.setAttribute('width','20%');
            myCell.setAttribute('height','20');
        currenttext = document.createTextNode(ceBitTeilnehmer.CB[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

       // }
        myTabBody.appendChild(myRow);
    }

}

function createconhitTab(){


    var webtechco = document.getElementById('webtechcon');
    webtechco.removeAttribute('class');
    var cebi = document.getElementById('cebit');
    cebi.removeAttribute('class');


    clear();
    var th = document.getElementById("conhit");
    th.setAttribute('class','secondselected');

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    var row1 = document.createElement('tr');
    row1.setAttribute('class','blue');


    var myCell1 = document.createElement('td');
    text1 = document.createTextNode("Nachname");
    myCell1.appendChild(text1);
    row1.appendChild(myCell1);

    var myCell2 = document.createElement('td');
    text2 = document.createTextNode("Name");
    myCell2.appendChild(text2);
    row1.appendChild(myCell2);

    var myCell3 = document.createElement('td');
    text3 = document.createTextNode("Studiengang");
    myCell3.appendChild(text3);
    row1.appendChild(myCell3);

    var myCell4 = document.createElement('td');
    text4 = document.createTextNode("E-mail");
    myCell4.appendChild(text4);
    row1.appendChild(myCell4);

    myTabBody.appendChild(row1);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<conHitTeilnehmer.CH.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
        // for(var j=0;j<5;j++){

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].name);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(conHitTeilnehmer.CH[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        // }
        myTabBody.appendChild(myRow);
    }

}

function createwebtechconTab(){

    var cebi = document.getElementById('cebit');
    cebi.removeAttribute('class');
    var conhi = document.getElementById('conhit');
    conhi.removeAttribute('class');

    clear();
    var th = document.getElementById("webtechcon");
    th.setAttribute('class','secondselected');

    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    var row1 = document.createElement('tr');
    row1.setAttribute('class','blue');


    var myCell1 = document.createElement('td');
    text1 = document.createTextNode("Nachname");
    myCell1.appendChild(text1);
    row1.appendChild(myCell1);

    var myCell2 = document.createElement('td');
    text2 = document.createTextNode("Name");
    myCell2.appendChild(text2);
    row1.appendChild(myCell2);

    var myCell3 = document.createElement('td');
    text3 = document.createTextNode("Studiengang");
    myCell3.appendChild(text3);
    row1.appendChild(myCell3);

    var myCell4 = document.createElement('td');
    text4 = document.createTextNode("E-mail");
    myCell4.appendChild(text4);
    row1.appendChild(myCell4);

    myTabBody.appendChild(row1);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<webTechConTeilnehmer.WTC.length;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe
        // for(var j=0;j<5;j++){

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].name);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].vorname);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].studiengang);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(webTechConTeilnehmer.WTC[i].Email);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);

        // }
        myTabBody.appendChild(myRow);
    }

}

// erstellung einer Tabelle ohne die Untertabelle mit Messe zu löschen
function createkostenTab(){

    var th2 = document.getElementById("teilnehmer");
    th2.removeAttribute('class');
    var th = document.getElementById("kosten");
    th.setAttribute('class','selected');

    clear();
    clearRow();
    var myTabBody = document.createElement('tbody');

    // weißt den Erstellentabelleninhalt zu der Tabelle hinzu
    document.getElementById("table").appendChild(myTabBody);

    var row2 = document.createElement('tr');
    row2.setAttribute('class','blue');

    var myCell5 = document.createElement('td');
    text5 = document.createTextNode("Messe");
    myCell5.appendChild(text5);
    row2.appendChild(myCell5);

    var myCell6 = document.createElement('td');
    text6 = document.createTextNode("Selbstkosten");
    myCell6.appendChild(text6);
    row2.appendChild(myCell6);

    myTabBody.appendChild(row2);

    // Diese Schleife erstellt jeweils eine Tabellenreihe
    for(var i=0;i<3;i++){
        var myRow = document.createElement('tr');

        // Diese Schleife erstellt die Tabellenzellen einer Reihe

            var myCell = document.createElement('td');
            currenttext = document.createTextNode(kosten.kosten[i].name);
            myCell.appendChild(currenttext);
            myRow.appendChild(myCell);

        var myCell = document.createElement('td');
        currenttext = document.createTextNode(kosten.kosten[i].kosten);
        myCell.appendChild(currenttext);
        myRow.appendChild(myCell);


        myTabBody.appendChild(myRow);
    }

}
// löscht eine ganze Tabelle
function clear(){




    tbl=document.getElementById('table');

    while(tbl.rows.length>0)
    {
        tbl.deleteRow(0);
    }

}

// löscht die zweite Zeile von einer Tabelle (um das Untermenü mit den Messen weg zubekommen)
function clearRow(){
   tbl2=document.getElementById('mainTable');
    while(tbl2.rows.length>1)
    {
        tbl2.deleteRow(1);
    }
}

// erweitert die Überschrifttabelle um die Messen
function extendTab(){


    var th2 = document.getElementById("kosten");
    th2.removeAttribute('class');
    var th = document.getElementById("teilnehmer");
    th.setAttribute('class','selected');



    clear();
    clearRow();
   // Die Erweiterungsreihe
    var messeRow = document.createElement('tr');


    var messe1 = document.createElement('td');
    text1 = document.createTextNode("CeBit");
    messe1.setAttribute('onclick','javascript:createcebitTab()' );

    messe1.setAttribute('class','extrareihe');
    messe1.setAttribute('id',"cebit");

    //fügt den Text in die Tabellen zelle hinzu
    messe1.appendChild(text1);

    var messe2 = document.createElement('td');
    text2 = document.createTextNode("ConHit");
    messe2.setAttribute('onclick','javascript:createconhitTab()' );

    // farbliche Markierung wenn man mit der Maus auf der Tabellenzelle ist
    messe2.setAttribute('id','conhit' );
    messe2.setAttribute('class','extrareihe');

    //fügt den Text in die Tabellen zelle hinzu
    messe2.appendChild(text2);

    var messe3 = document.createElement('td');
    text3 = document.createTextNode("WebTechcon");
    messe3.setAttribute('onclick','javascript:createwebtechconTab()' );
    messe3.setAttribute('class','extrareihe');
    messe3.setAttribute('id',"webtechcon");

    //fügt den Text in die Tabellen zelle hinzu
    messe3.appendChild(text3);

    //fügt die Zellen der Erweiterungsreihe zu
    messeRow.appendChild(messe1);
    messeRow.appendChild(messe2);
    messeRow.appendChild(messe3);



    document.getElementById('mainTable').appendChild(messeRow);

}

