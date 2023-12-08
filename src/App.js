
import NavBar from "./components/NavBar"

import EventDetailsPage from "./Pages/EventDetailsPage/EventDetailsPage";
import OrderConfirmationPage from "./Pages/OrderConfirmationpage/OrderConfirmationPage"

import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import InvoicePage from "./Pages/InvoicePage/InvoicePage";

import './index.css';

function App() {
  return (
    <div className='bg-[#13131A]'>

    <NavBar />
    
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventdetails/:id" element={<EventDetailsPage />} />
            <Route path="/confirm-order/:id" element={<OrderConfirmationPage />} />
            <Route path="/confirm-order/:id/payment" element={<InvoicePage />} />
            
          </Routes>

      

   
  </div>
  );
}

export default App;
