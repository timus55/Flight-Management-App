package com.capgemini.flightmanagement.dao;

import java.util.List;

import com.capgemini.flightmanagement.model.Flights;
import com.capgemini.flightmanagement.model.Tickets;
import com.capgemini.flightmanagement.model.Users;

public interface FlightDaoInterface {

	boolean cancelFlight(Tickets bd);
	
	boolean registerUser(Users users);
	
	Integer validateUser(String uname, String password);
	
	List<Flights> searchFlight(String source,String dest);
	
	List<Tickets> viewTickets(int userid);
}
