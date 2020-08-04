//PARA EL DIV MOSTRADO - OCULTADO 1

console.log();

function Mostrar_div_mostrar1 (){
    document.getElementById('div_mostrar1').style.display = "flex";
    document.getElementById('titulo1_div').style.display = "none";
}

function Ocultar_div_mostrar1 (){
    document.getElementById('div_mostrar1').style.display = "none";
    document.getElementById('titulo1_div').style.display = "block";
}

function Mostrar_Ocultar(){
    //var elementoDiv1 = document.getElementById('div_mostrar1');
    var elemento = document.getElementById('titulo1_div');
        
    if (elemento.style.display == "block"){
        Mostrar_div_mostrar1();
        
    }else{
        Ocultar_div_mostrar1();
      
    }
}


//PARA EL DIV MOSTRADO - OCULTADO 2

/*
function Mostrar2 (){
    document.getElementById('div_mostrar2').style="display: flex";
    document.getElementById('titulo_div').style="display: none";
}

function Ocultar2 (){
    document.getElementById('div_mostrar2').style="display: none";
    document.getElementById('titulo_div').style="display: block";
}

function Mostrar_Ocultar2(){
    var elemento = document.getElementById('div_mostrar2');
   // var elemento2 = document.getElementById('div_mostrar1');
    if (elemento.style.display == "none"){
        Mostrar2();
    }else{
        Ocultar2();
    }
}
*/