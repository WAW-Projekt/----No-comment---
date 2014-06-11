

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


    if(!($("#name").val().match("([a-z]|[A-Z])+"))){
        gueltig=false;
        $("#name").addClass('red');

    }

    if(!($("#vorname").val().match("([a-z]|[A-Z])+"))){
        gueltig=false;
        $("#vorname").addClass('red');

    }

    if(!($("#matrikelnr").val().match("[0-9]+"))){
        gueltig=false;
        $("#matrikelnr").addClass('red');
    }

    if(!($("#handy").val().match("[0-9]+"))&& ($("#handy").val().charAt(0)!=0)){
        gueltig=false;
        $("#handy").addClass('red');
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!(filter.test($("#email").val()))){
        gueltig=false;
        $("#email").addClass('red');
    }

    if(!gueltig){

        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

        }



    return gueltig;

}
