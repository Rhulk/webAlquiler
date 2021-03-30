const horasInicio = document.getElementById('listaHorasInicio');
const horasHasta = document.getElementById('listaHorasHasta');
const fecha = document.getElementById("dp1").value;
const fechaFin = document.getElementById("dp2").value;




const input = document.querySelector('input');

console.log('select.js');



const datosTecnicos = document.getElementById("infoTecnica");

console.log('fin select');


input.addEventListener('change', updateValue);

function updateValue(e) {
  console.log('Change Fecha');
}

function cambiaDefectoInicio(id){
    
    if ( id =='input-inicio'){
        loadHorasInicio();
        console.log('inicio');
        document.getElementById("selectHoraInicio").className= "cell py-1 hora-select-false";
    }
    else{
        loadHorasHasta();
        document.getElementById("selectHoraHasta").className= "cell py-1 hora-select-false";
    }
 
}

$(document).ready(function(){

    $('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    startDate: '0d'
    });
    
    $('.cell').click(function(){
    $('.cell').removeClass('select');
    $(this).addClass('select');
    });
    
    });


    function loadHorasInicio(){

        const htmlHoras = `
        <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="900" onclick="getHora(this.id)"  class="cell py-1">9:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="930" onclick="getHora(this.id)" class="cell py-1">9:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="945" onclick="getHora(this.id)" class="cell py-1">9:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1000" onclick="getHora(this.id)" class="cell py-1">10:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1030" onclick="getHora(this.id)" class="cell py-1">10:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1045" onclick="getHora(this.id)" class="cell py-1">10:45AM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1100" onclick="getHora(this.id)" class="cell py-1">11:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1130" onclick="getHora(this.id)" class="cell py-1">11:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1145" onclick="getHora(this.id)" class="cell py-1">11:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1200" onclick="getHora(this.id)" class="cell py-1">12:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1230" onclick="getHora(this.id)" class="cell py-1">12:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1245" onclick="getHora(this.id)" class="cell py-1">12:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="100" onclick="getHora(this.id)" class="cell py-1">1:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="130" onclick="getHora(this.id)" class="cell py-1">1:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="145" onclick="getHora(this.id)" class="cell py-1">1:45PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="200" onclick="getHora(this.id)" class="cell py-1">2:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="230" onclick="getHora(this.id)" class="cell py-1">2:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="245" onclick="getHora(this.id)" class="cell py-1">2:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="300" onclick="getHora(this.id)" class="cell py-1">3:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="330" onclick="getHora(this.id)" class="cell py-1">3:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="415" onclick="getHora(this.id)" class="cell py-1">4:15PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="500" onclick="getHora(this.id)" class="cell py-1">5:00PM</div>
        </div>
    </div>`;
    horasInicio.innerHTML = htmlHoras;
    document.getElementById("listaHorasInicio").className ="card-body p-3 p-sm-5";
    }

    function loadHorasHasta(){

        const htmlHoras = `
        <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="900" onclick="getHoraHasta(this.id)"  class="cell py-1">9:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="930" onclick="getHoraHasta(this.id)" class="cell py-1">9:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="945" onclick="getHoraHasta(this.id)" class="cell py-1">9:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1000" onclick="getHoraHasta(this.id)" class="cell py-1">10:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1030" onclick="getHoraHasta(this.id)" class="cell py-1">10:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1045" onclick="getHoraHasta(this.id)" class="cell py-1">10:45AM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1100" onclick="getHoraHasta(this.id)" class="cell py-1">11:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1130" onclick="getHoraHasta(this.id)" class="cell py-1">11:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1145" onclick="getHoraHasta(this.id)" class="cell py-1">11:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1200" onclick="getHoraHasta(this.id)" class="cell py-1">12:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1230" onclick="getHoraHasta(this.id)" class="cell py-1">12:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1245" onclick="getHoraHasta(this.id)" class="cell py-1">12:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="100" onclick="getHoraHasta(this.id)" class="cell py-1">1:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="130" onclick="getHoraHasta(this.id)" class="cell py-1">1:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="145" onclick="getHoraHasta(this.id)" class="cell py-1">1:45PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="200" onclick="getHoraHasta(this.id)" class="cell py-1">2:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="230" onclick="getHoraHasta(this.id)" class="cell py-1">2:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="245" onclick="getHoraHasta(this.id)" class="cell py-1">2:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="300" onclick="getHoraHasta(this.id)" class="cell py-1">3:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="330" onclick="getHoraHasta(this.id)" class="cell py-1">3:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="415" onclick="getHoraHasta(this.id)" class="cell py-1">4:15PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="500" onclick="getHoraHasta(this.id)" class="cell py-1">5:00PM</div>
        </div>
    </div>`;
    horasHasta.innerHTML = htmlHoras;
    document.getElementById("listaHorasHasta").className ="card-body p-3 p-sm-5";
    }

    function clearHorasInicio(){

        const htmlHoras = ``;
        horasInicio.innerHTML = htmlHoras;
        
        //document.getElementById("selectHoraInicio").className ="kike";
        //document.getElementById("listaHoras").classList.add('class');
    }
    function clearHorasHasta(){

        const htmlHoras = ``;
        horasHasta.innerHTML = htmlHoras;
        
        //document.getElementById("selectHoraHasta").className ="";
        //document.getElementById("listaHoras").classList.add('class');
    }


    loadHorasInicio(); // para que se cargen las horas al cargar la pagina
    function getHora(id){
        //console.log(document.getElementById("dp1").value);
        document.getElementById("selectHoraInicio").className= "cell-select py-1 hora-select-true";
        document.getElementById("selectHoraInicio").textContent = document.getElementById(id).textContent;
        clearHorasInicio();
        //document.getElementById("idBike").focus();
    }
    function getHoraHasta(id){
        //console.log(document.getElementById("dp1").value);
        document.getElementById("selectHoraHasta").className= "cell-select py-1 hora-select-true";
        document.getElementById("selectHoraHasta").textContent = document.getElementById(id).textContent;
        clearHorasHasta();
        document.getElementById("idBike").focus();
        
        console.log("Fecha desde: "+document.getElementById("dp1").value);
        console.log("Fecha Hasta: "+document.getElementById("dp2").value);
       
        console.log("http://localhost:8080/disponibles?fechaInicio="+document.getElementById("dp1").value+"&fechafin="+document.getElementById("dp2").value)
	    $.ajax({
	        url: "http://localhost:8080/disponibles?fechaInicio="+
	        document.getElementById("dp1").value+
	        "&fechafin="+document.getElementById("dp2").value
	    }).then(function(data) {
	    	console.log(data)
	    	bikes =data;
	    	console.log(data.nombre)
	    	
	    	
	    	
	    	loadBikeDisponiblesEntreFechas();
	    	//console.log(diasEntreFechas(moment(document.getElementById("dp1").value),
	    		//	moment(document.getElementById("dp2").value));

	    	var rangoFechas = diasEntreFechas(moment(document.getElementById("dp1").value), 
	    			moment(document.getElementById("dp2").value));
	    	console.log(rangoFechas);
	    });
		
        

    }
    var bikes;
   // var datas = ["Banana", "Orange", "Apple", "Mango"];

    function loadBikeDisponiblesEntreFechas() {
    	console.log(" -- ");
       $('#idBike').find('option').not(':first').remove();
      bikes.forEach(function(bike) {
    	  console.log(" --> "+bike)
    	  		
    	  	     $('#idBike').append($('<option>',
    	  	    	     {
    	  	    	        value: bike.id_bike,
    	  	    	        text : "Bike: "+bike.nombre
    	  	    	    }));
    	  
  
      });
    }
    
    function disponibles(desde, hasta){
    	
    		console.log("Aqui no");
    	
    	    $.ajax({
    	        url: "http://localhost:8080/disponibles?fechaInicio="+desde+"&fechafin="+hasta
    	    }).then(function(data) {
    	    	console.log(data)
    	    	console.log(" URL: "+url)
    	    });
    	
    }
    function updateDatabase() {
        $.ajax({
            url: 'database.php',
            type: 'POST',
            data: {
                'action': 'get'
            },
            dataType: 'json',
            success: function() {
                alert('HECHO');
            }
        });
    }
    
    let ficha =[
    {
        cuerpo:"Ficha Tecnica: Specialized diseñó el Turbo Levo<br>"+
        "Specialized diseñó el Turbo Levo principalmente como una verdadera moto de pista. <br>"+
        "En términos de geometría, cinemática y lenguaje de diseño, Specialized utiliza la <br>"+
        "última bicicleta de pista, la Stumpjumper. Además, la moto ha sido equipada con <br>"+
        "tecnología líder en el mercado que le da el poder de recorrer más senderos.<br>"+
        "¿Nuevo motor? Comprobado. ¿Nueva batería? Comprobado. ¿Un marco ultraligero <br>"+
        "y poderoso? Revisa dos veces.<br>"
        
    },
    {
        cuerpo: " Ficha Tecnica: Bike 2"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 3"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 4"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 5"
    }
];

function loadBike(){
    document.getElementById("imgBike").src="imagen/bike/imagen"+document.form.idBike.selectedIndex+".jpg";
    info(document.form.idBike.selectedIndex);
}

function info(id){
    const inf = ficha[id-1].cuerpo;
    datosTecnicos.innerHTML = inf;
}


var diasEntreFechas = function(desde, hasta) {

    var fechas = [];
  	while (desde.isSameOrBefore(hasta)) {
    	fechas.push(desde.format('YYYY-MM-DD'));
   		desde.add(1, 'days');
  	}
  	return fechas;
};

function reserva(){
	
	console.log('pepe');
	location="http://www.cristalab.com";
	console.log('pepe 2');
}

function data(){
	console.log('Enviadas Peticiones Post -->>');
	var selectHoraInicio =document.getElementById("selectHoraInicio").textContent;
	var selectHoraHasta =document.getElementById("selectHoraHasta").textContent;
	var idLugar = document.getElementById("idLugar").options[document.getElementById("idLugar").selectedIndex].text;
	var idTalla = document.getElementById("idTalla").options[document.getElementById("idTalla").selectedIndex].text;
	var idBike = document.getElementById("idBike").options[document.getElementById("idBike").selectedIndex].value;
	var idPedal = document.getElementById("idBike").options[document.getElementById("idPedal").selectedIndex].text;
	var idCasco = document.getElementById("idCasco").options[document.getElementById("idCasco").selectedIndex].text;
	var rangoFechas = diasEntreFechas(
			moment(document.getElementById("dp1").value)
			, moment(document.getElementById("dp2").value)
			);
	
/*	rangoFechas.forEach(
			fecha => console.log(fecha);	
	);
*/	
	var i;
	for (i = 1; i <= rangoFechas.length; i++) {
	  
	  console.log(rangoFechas[i-1]+' <<-- Fecha enviada -->> '+i);
		$.ajax({
			  method: "POST",
			  url: "http://localhost:8080/altaReservas",
			  data: { 'id_bike': idBike , 'fecha': rangoFechas[i-1]  },
			  success: function (respuesta) {

                        if (respuesta == true) {
                        	console.log('i:'+i);
                        	
	                        	//location="http://localhost:8080/bike/alquilerSuccess.html";
	                        	console.log('Redirección tras petición post');
                        	
                        	console.log('Respuesta post [OK]');
                        } else if (respuesta== false){
                            console.log('fallo');
                        }
                    },
                    error: function (xhr, textStatus, errorThrown) {
                         console.log('Error');
                    }

			  
			});
	  
	}
	
/*
	console.log(selectHoraInicio);
	console.log(rangoFechas);	
	console.log(selectHoraHasta);
	console.log(idLugar);
	console.log(idTalla);
	console.log(idBike);
	console.log(idPedal);
	console.log(idCasco);

	*/

}



    
    