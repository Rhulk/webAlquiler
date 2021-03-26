package com.alquiler.Bike.Controller.Rest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alquiler.Bike.model.Bike;
import com.alquiler.Bike.model.Reserva;
import com.alquiler.Bike.repository.BikeDisponiblesRepo;
import com.alquiler.Bike.service.bbdd.BikeDisponiblesService;
import com.alquiler.Bike.service.bbdd.BikeReservasService;



/*
 * Necesidad en BBDD para cada registro a modo de historico
 * 
 * id_reserva, id_bike, id_persona, fecha_desde, fecha_hasta
 * 
 *  1.- Recupero listado de id_bike
 *  2.- Bucle por rango de fecha chequeando cada id_bike
 * 
 */

@RestController
public class BikeController {
	
	List<Reserva> reservas = new LinkedList<Reserva>();
	List<Bike> bicis = new LinkedList<Bike>();
	Reserva reserva = new Reserva();
	
	@Autowired
	BikeDisponiblesService bikeService;
	
	@Autowired
	BikeReservasService reservasService;
	
	int [] bikeDisponibles;
	
	public BikeController() {

		 
	}
	@GetMapping("/allBike")
	public List<Bike> allBike(){
		return bikeService.todas();
	}
	
	@GetMapping("/allReservas")
	public List<Reserva> allReservas(){
		return reservasService.allReservas();
	}
	
	@GetMapping("/allReservasActivas")
	public List<Reserva> allReservasActivas(){
		List<Reserva> res = reservasService.allReservasActivas();
		System.out.println(res.get(0).getFecha_desde()+ " <<<---- Fecha desdde");
		return reservasService.allReservasActivas();
	}
	
	@GetMapping("/test")
	public String test() {
		return bikeService.test();
	}
	
	@PostMapping("/altaReservas")
	String altaReservas(String id_bike, String fecha) {
		System.out.println(" Alta Reserva");
		System.out.println("-- Id Bike: "+ id_bike+" -- Fecha reserva: "+fecha+" -- \n");
		
		return "Pedo loco";
	}
	
	@GetMapping("/disponibles")
	public List<Bike> bikeDisponibles(
			@RequestParam(value = "fechaInicio") String desde1, @RequestParam(value = "fechafin") String hasta1
			) {
	/*	System.out.println(" -- fechas -- "+ desde1+ " "+hasta1);
		LocalDate desde2 = LocalDate.parse("2021-03-10");
		LocalDate hasta2 = LocalDate.parse("2021-03-15");
	*/	
		// test pull kasa
		bicis.clear();// que se acumulan las peticiones
		List<Bike> allBike =bikeService.todas();
		List<Reserva> allReservas = reservasService.reservasEntreFechas(LocalDate.parse(desde1), LocalDate.parse(hasta1));
		
		if (allReservas.size()>0) {
			

			for (int x=0; x <= allBike.size()-1; x++) {
				//System.out.println(" Bike: "+x+" de : "+allBike.size());
				//System.out.println(" Bike? "+allBike.get(x));
				for (int y=0; y <= allReservas.size()-1; y++) {
					//System.out.println(" Reserva: "+y+" de : "+allReservas.size());
					if (allBike.get(x).getId_bike() == allReservas.get(y).getId_bike()) {
						y=allReservas.size();
						//System.out.println(" Bici reservada -->> "+allBike.get(y).toString());
					}else {
						if(allReservas.size()-1 == y) {
							//System.out.println(" Bici DISPONIBLE : "+allBike.get(x));
							bicis.add(allBike().get(x)); // add Bike disponible
						}
					}
				}
				
			}		
			//System.out.println("Bicis disponibles: >>>>> "+bicis);
	
		}else{
			//System.out.println(" -- No hay reservas para la fecha --- Todas las bicis disponibles -- Borrar Fin Testeo --");
			bicis = allBike;
		}
		return bicis;
	}
	
	public int[] bikes( ) {
		Date someDate = new Date();
		Date newDate = new Date(someDate.getTime() + TimeUnit.DAYS.toMillis( 1 ));
		System.out.println("Manana sera: "+newDate);
		bikeDisponibles.clone();
		
		
		return bikeDisponibles;
	}
	

}
