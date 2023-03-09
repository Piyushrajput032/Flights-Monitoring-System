import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FlightList from './FlightList';
import PassengerList from './PassengerList';
//import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
        
          <Route exact path="/" element={<FlightList/>} />
          <Route path="/passengeList/:id" element={<PassengerList/>} />
       
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
