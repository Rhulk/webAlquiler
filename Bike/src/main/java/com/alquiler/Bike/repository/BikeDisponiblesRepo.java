package com.alquiler.Bike.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.Bike.model.Bike;

public interface BikeDisponiblesRepo extends JpaRepository<Bike, Integer>{

}
