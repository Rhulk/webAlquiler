package com.alquiler.Bike.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reserva")
public class Reserva {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_reserva;
	private int id_bike;
	private int id_persona;
	private LocalDate fechaDesde;
	private LocalDate fechaHasta;
	
	public int getId_reserva() {
		return id_reserva;
	}
	public void setId_reserva(int id_reserva) {
		this.id_reserva = id_reserva;
	}
	public int getId_bike() {
		return id_bike;
	}
	public void setId_bike(int id_bike) {
		this.id_bike = id_bike;
	}
	public int getId_persona() {
		return id_persona;
	}
	public void setId_persona(int id_persona) {
		this.id_persona = id_persona;
	}
	public LocalDate getFecha_desde() {
		return fechaDesde;
	}
	public void setFecha_desde(LocalDate fechaDesde) {
		this.fechaDesde = fechaDesde;
	}
	public LocalDate getFecha_hasta() {
		return fechaHasta;
	}
	public void setFecha_hasta(LocalDate fechaHasta) {
		this.fechaHasta = fechaHasta;
	}
	@Override
	public String toString() {
		return "Reserva [id_reserva=" + id_reserva + ", id_bike=" + id_bike + ", id_persona=" + id_persona
				+ ", fechaDesde=" + fechaDesde + ", fechaHasta=" + fechaHasta + "]";
	}
	
	
	

}
