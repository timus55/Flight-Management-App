package com.capgemini.flightmanagement.dao;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.capgemini.flightmanagement.model.Flights;
import com.capgemini.flightmanagement.model.Tickets;
import com.capgemini.flightmanagement.model.Users;

@Repository
public class FlightDaoImpl implements FlightDaoInterface {
	
	@Autowired
	private EntityManager entityManager;
	
	
	public FlightDaoImpl() {
	}


	public void addNewFlight(Flights fd)
	{

		Session cs = entityManager.unwrap(Session.class);
		cs.saveOrUpdate(fd);
	}
	

	public void updateFlight(Flights fd) {

		Session cs = entityManager.unwrap(Session.class);
		cs.saveOrUpdate(fd);
		
		
	}

	public Tickets getBookingDetails(Integer bookindId)
	{
		return entityManager.find(Tickets.class, bookindId);
	}
	
	public boolean createAccount(Users ud) {
		
		Session cs = entityManager.unwrap(Session.class);
		cs.saveOrUpdate(ud);
	
		return true;
	}

	@Override
	public boolean registerUser(Users users) {
		// TODO Auto-generated method stub
		return false;
	}

	@Transactional
	public boolean addBooking(Tickets bd)
	{
		Session cs = entityManager.unwrap(Session.class);
		cs.saveOrUpdate(bd);
		return true;
	}

	@Override
	public Integer validateUser(String uname, String password) {
		try {
			String command = "select ud.userId from Users ud where ud.username = :uName and ud.password = :pass";
			TypedQuery<Integer> query = entityManager.createQuery(command,Integer.class);
			query.setParameter("uName", uname);
			query.setParameter("pass", password);
			Integer uid = 0;
			uid = query.getSingleResult();
		
			//AirlineReserationSystm.setCurrUserId(uid);
			if(uid > 0)
				return uid;
			else
				return 0;
			}
			catch (NoResultException e) {
				return 0;
			}	
	}


	
	@Transactional
	@Override
	public  List<Flights> searchFlight(String source, String dest)  {
		try {
			String qStr = "SELECT f FROM Flights f WHERE f.source=:psource and f.destination=:pdest";
			TypedQuery<Flights> query = entityManager.createQuery(qStr, Flights.class);
			query.setParameter("psource", source);
			query.setParameter("pdest", dest);
			List<Flights> flights = query.getResultList();
	
			return flights;
			}
			catch (NoResultException e) {
				
				return null;
			}
	}
	
	public Flights getFlightById(int flightId) {
		
		String qStr = "SELECT f FROM Flights f WHERE f.flightId=:fId";
		TypedQuery<Flights> query = entityManager.createQuery(qStr, Flights.class);
		query.setParameter("fId", flightId);
		Flights flight = query.getSingleResult();

		return flight;

	}


	@Override
	public boolean cancelFlight(Tickets bd) {

		Session cs = entityManager.unwrap(Session.class);
		cs.saveOrUpdate(bd);
		cs.delete(bd);
	
		return true;
	}


	@Override
	public List<Tickets> viewTickets(int userid) {
		String qStr = "SELECT t FROM Tickets t WHERE userid=:uId";
		TypedQuery<Tickets> query = entityManager.createQuery(qStr, Tickets.class);
		query.setParameter("uId", userid);
		List<Tickets> tickets = query.getResultList();
		return tickets;
	}
	
}
