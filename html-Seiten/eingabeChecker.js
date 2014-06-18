

/*function nameChecker(){


    var name = document.getElementsByName('name');
    var i;
    var gueltig = true;
    for(i=0;i<name.value.length;i++){

       if(name.value[i]>'Z'&& name.value[i]<'A'|| name.value[i]>'z'&& name.value[i]<'a'){
           gueltig = false;
       }

    }
    if(gueltig){

       var fenster = window.open('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
        fenster.alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
    }
}*/



function ueberpruefung(){


    var gueltig = true;
    $("#name").removeClass('red');
    $("#vorname").removeClass('red');
    $("#matrikelnr").removeClass('red');
    $("#email").removeClass('red');
    $("#handy").removeClass('red');


   /* if($("#handy").val().charAt(0)!="0"&&!($("#handy").val().match("[0-9]")) ){


        $("#handy").focus();
        gueltig=false;
        $("#handy").addClass('red');

    }*/

    var strReg = /^0+([0-9]{1,100})$/;

    if(!(strReg.test($("#handy").val()))){
        $("#handy").focus();
        gueltig=false;
        $("#handy").addClass('red');

    }


    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!(filter.test($("#email").val()))){
        $("#email").focus();
        gueltig=false;
        $("#email").addClass('red');
    }



    if(!($("#matrikelnr").val().match("[0-9]+"))){
        gueltig=false;
        $("#matrikelnr").focus();
        $("#matrikelnr").addClass('red');
    }



    var filter2 = /^([a-zA-Z]{1,100})$/;
    if(!(filter2.test($("#vorname").val()))){
        gueltig=false;
        $("#vorname").focus();
        $("#vorname").addClass('red');

    }

    if(!(filter2.test($("#name").val()))){
        gueltig=false;
        $("#name").focus();
        $("#name").addClass('red');

    }


    if(!gueltig){

        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

    }

    return gueltig;

}
