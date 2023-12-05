
import NavBar from "./components/NavBar"

import SingleTicketPage from "./Pages/SingleTicketPage/SingleTicketPage";
import OrderConfirmationPage from "./Pages/OrderConfirmationpage/OrderConfirmationPage"

import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import InvoicePage from "./Pages/InvoicePage/InvoicePage";

import './index.css';

function App() {
  return (
    <div className="hfeed site" id="page">

    <NavBar />
    
    
    <div id="content" className="site-content">
      <div id="primary" className="content-area">
        <main id="main" className="site-main">

        

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventdetails" element={<SingleTicketPage />} />
            <Route path="/confirmationpage" element={<OrderConfirmationPage />} />
            <Route path="/invoicepage" element={<InvoicePage />} />
            
          </Routes>

        </main>
        {/* #main */}
      </div>
      {/* #primary */}
    </div>
    {/* .site-content */}

   
  </div>
  );
}

export default App;
