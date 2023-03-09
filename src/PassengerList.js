import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function PassengerList() {
  const id  = useParams();
 
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios.get(`https://api.instantwebtools.net/v1/passenger?flightId=${id}`)
      .then(response => {
        setPassengers(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  console.warn(typeof(passengers))
  const uniqueNames = [...new Set(passengers.map(passenger => passenger.name))];

  return (
    <div>
      <h1>Passengers</h1>
      <ul>
        {uniqueNames.map(name => (
          <li key={name._id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PassengerList;
