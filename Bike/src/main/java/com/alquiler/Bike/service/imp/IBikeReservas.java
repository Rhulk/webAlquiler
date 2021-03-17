package com.alquiler.Bike.service.imp;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.alquiler.Bike.model.Reserva;

public interface IBikeReservas {
	
	List<Reserva> allReservas();
	List<Reserva> allReservasActivas();
	List<Reserva> reservasEntreFechas(LocalDate desde, LocalDate hasta);
	

}
