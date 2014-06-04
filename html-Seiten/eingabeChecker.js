

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
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");

        $("#name").addClass('red');

    }

    if(!($("#vorname").val().match("([a-z]|[A-Z])+"))){
        gueltig=false;
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        $("#vorname").addClass('red');

    }

    if(!($("#matrikelnr").val().match("[0-9]+"))){
        gueltig=false;
        alert( "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        $("#matrikelnr").addClass('red');
    }

    if(!($("#handy").val().match("[0-9]+"))&& ($("#handy").val().charAt(0)!=0)){
        gueltig=false;
        alert( "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        $("#handy").addClass('red');
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!(filter.test($("#email").val()))){
        gueltig=false;
        alert( "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        $("#email").addClass('red');
    }

   /* if(!gueltig){
        $("#submit").submit(function (e) {
            e.preventDefault();

        })
    }*/


    return gueltig;

}
