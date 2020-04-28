package com.capgemini.flightmanagement.service;

import java.util.List;

import com.capgemini.flightmanagement.model.*;

public interface FlightServiceInterface {
	
	Integer bookFlight(int flightid,Integer userid);
	
	boolean cancelFlight(Integer bookid);
	
	boolean registerUser(Users users);
	
	Integer validateUser(String uname, String password);
	
	List<Flights> searchFlight(String source,String dest);
	
	List<Tickets> viewTickets(int userid);

}
