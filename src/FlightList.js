import ReactDOM from 'react-dom';
import './App.css';
import React, { useEffect, useState, createContext } from 'react';
import PassengerList from './PassengerList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export const flightcontext = createContext();

function FlightList() {
  const [items, setItem] = useState([])

  let API = "https://api.instantwebtools.net/v1/passenger?page=1&size=30";

  const fetchdata = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      setItem(data.data)

    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchdata(API);
  }, [])


  const gre = items.map((item) => {
    const t = { name: item.airline[0].name, id: item.airline[0].id }
        return t
  })
  console.log('this is t',gre)
 
  const planeid =[...(new Set(items.map((item) => item.airline[0].id)))]
  console.log('new ids',planeid)
  const planes = items.map((item) => item.airline[0].name)
  console.log('new name',planes)
  const planesData = planeid.map(( id,index) => {
    return { id: id, name: planes[id] }
  })
  console.log(planesData)
  
  const getPassengerList = (flightname) => {
    console.log('hello')

  }

  return (
    <div className="App">
      <h1>Airline Monitoring App</h1>
      <h2 style={{ border: '2px solid black' }}>Flight Names</h2>
      <div className="App">
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '0', padding: '0', listStyleType: 'none' }}>
          {planesData.map((planes, i) => {
            return (<>
            <li key={i} style={{ margin: '10px', padding: '10px', border: '2px solid black', borderRadius: '5px' }}>
              <Link key={i} to={`/passengeList/${planes.id}`}><span style={{ padding: '5px' }}>{planes.name}</span></Link>
              </li>
              </> )
          })}
        </ul>
      </div>
    </div>
  );
}

export default FlightList;









































// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function FlightList() {
//   const [flights, setFlights] = useState([]);
//   const [af,setAF] = useState([])
//   useEffect(() =>  {
//     axios.get('https://api.instantwebtools.net/v1/passenger?page=1&size=30')
//       .then(response => {
//         setFlights(response.data.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
      
//   }, []);

//   console.log(af)
//   return (
//     <div>
//       <h1>Flights</h1>
//       <ul>
//         {flights.map(flight => (
//           <li key={flight._id}>
//             <Link to={`/flights/${flight._id}`}>{flight.name} - {flight.id}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FlightList;
