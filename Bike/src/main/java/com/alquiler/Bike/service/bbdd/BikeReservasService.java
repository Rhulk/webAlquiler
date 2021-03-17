package com.alquiler.Bike.service.bbdd;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alquiler.Bike.model.Reserva;
import com.alquiler.Bike.repository.BikeReservasRepo;
import com.alquiler.Bike.service.imp.IBikeReservas;

@Service
public class BikeReservasService implements IBikeReservas {
	
	@Autowired
	BikeReservasRepo reservasRepo;

	@Override
	public List<Reserva> allReservasActivas() {
		return reservasRepo.findByFechaDesdeBefore(new Date());
	}

	@Override
	public List<Reserva> allReservas() {
		return reservasRepo.findAll();
	}

	@Override
	public List<Reserva> reservasEntreFechas(LocalDate desde1, LocalDate hasta1) {
		return reservasRepo.findByFechaDesdeGreaterThanEqualAndFechaHastaLessThanEqual(desde1, hasta1);
	}

}
