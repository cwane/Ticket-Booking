import React from 'react';
import EventDetails from "../../components/EventDetails"
const SingleTicketPage = () => {

    const cardStyle = {
        width: '286px',
        height: '400px', 
        margin: '15 12px', 
        marginLeft: '12px'
      };


      const buttonStyle = {
        position: 'absolute',
        bottom: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        backgroundColor:'#808080', // Adjust the color of the button
        color: '#fff', // Adjust the text color of the button
        borderRadius: '8px',
        cursor: 'pointer',
        opacity: 0.7
      };

      const imageContainerStyle = {
        height: '80%', // Adjust the height of the image container
        borderRadius: '12px',
        
      };
    
      const detailsContainerStyle = {
        height: '20%', // Adjust the height of the details container
        padding: '0 12px',
        display: 'flex', // Make the container a flex container
        alignItems: 'center', // Add padding for better spacing
      };
  return (
    <div className='container flex'>
    <div className="mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-800" style={cardStyle}>
        <a href="/eventdetails">
          <div className="overflow-hidden"style={imageContainerStyle} >
            <img
              className="w-full h-full object-cover"
              src="https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg"
              alt=""
            />
            <button style={buttonStyle}>Concert</button>
          </div>
        </a>
        <div className="p-5" style={detailsContainerStyle}>
          <a href="#">
            <h5 className="mb-2 font-bold tracking-tight text-gray dark:text-white">
              Noteworthy technology
            </h5>
            <span className="mb-2 font-bold tracking-tight text-gray dark:text-white" style={{ marginLeft: '12px'}}>
              Date
            </span>
            <span className="mb-2 font-bold tracking-tight text-gray dark:text-white" style={{ marginLeft: '12px' }}>
              Day
            </span>
          </a>
        </div>
      </div>


    <EventDetails />
      
    </div>
  );
}

export default SingleTicketPage;
