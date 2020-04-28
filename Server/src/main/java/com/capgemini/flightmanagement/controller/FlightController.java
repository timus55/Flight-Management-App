package com.capgemini.flightmanagement.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.capgemini.flightmanagement.model.Flights;
import com.capgemini.flightmanagement.model.Tickets;
import com.capgemini.flightmanagement.model.Users;
import com.capgemini.flightmanagement.service.FlightServiceImpl;;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FlightController {

	@Autowired
	FlightServiceImpl flightService;	

	@PostMapping("/addUser")
	public boolean createUser(@RequestBody Users users)
	{
		return flightService.registerUser(users);
	}

	@GetMapping("/login/{uName}/{pass}")
	public Integer login(@PathVariable String uName,@PathVariable String pass) {
		return flightService.validateUser(uName, pass);
	}
	
	@GetMapping("/searchFlight/{source}/{dest}")
	public List<Flights> searchFlight(@PathVariable String source,@PathVariable String dest)
	{
		return flightService.searchFlight(source, dest);
	}
	
	@GetMapping("/all/{userid}")
	public List<Tickets> getBookings(@PathVariable Integer userid)
	{
		return flightService.viewTickets(userid);
	}
	@GetMapping("/bookFlight/{flightId}/{userId}")
	public Integer bookFlight(@PathVariable Integer flightId,@PathVariable Integer userId)
	{
		return flightService.bookFlight(flightId, userId);
	}
	
	@GetMapping("/cancelFlight/{bookingId}")
	public boolean cancelFlight(@PathVariable Integer bookingId)
	{
		return flightService.cancelFlight(bookingId);
	}	
}
