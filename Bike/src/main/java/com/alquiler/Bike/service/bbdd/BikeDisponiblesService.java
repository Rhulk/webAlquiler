package com.alquiler.Bike.service.bbdd;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alquiler.Bike.model.Bike;
import com.alquiler.Bike.repository.BikeDisponiblesRepo;
import com.alquiler.Bike.service.imp.IBikeDisponibles;
@Service
public class BikeDisponiblesService implements IBikeDisponibles{
	
	@Autowired
	private BikeDisponiblesRepo bikeRepo;

	@Override
	public List<Bike> todas() {
		List<Bike> lista = bikeRepo.findAll();
		return lista;
	}

	@Override
	public String test() {
		System.out.println(" JPA Test");
		return "JPA Test Rest";
	}

}
