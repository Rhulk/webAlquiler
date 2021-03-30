package com.alquiler.Bike.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alquiler.Bike.model.Reserva;

public interface BikeReservasRepo extends JpaRepository<Reserva, Integer>{
	
	
    public List<Reserva> findByFechaDesdeBefore(Date fecha_desde);
    public List<Reserva> findByFechaDesdeGreaterThanEqualAndFechaHastaLessThanEqual(LocalDate desde , LocalDate hasta);
    public List<Reserva> findByFechaBetween(LocalDate desde , LocalDate hasta);
    
    

}
