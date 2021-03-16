package com.alquiler.Bike.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Material")
public class Bike {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_bike;
	private int id_persona;
	
	private String nombre;
	private String descripcion;
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
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	@Override
	public String toString() {
		return "Bike [id_bike=" + id_bike + ", id_persona=" + id_persona + ", nombre=" + nombre + ", descripcion="
				+ descripcion + "]";
	}
	
	

}
