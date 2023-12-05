import React from "react";

const EventDetailsFrame = ({ eventDetails, selectedTickets }) => {
  return (
    <div className="max-w-md mx-auto  border border-gray-200 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{eventDetails.title}</h2>
      <div className="flex flex-col mb-4">
        <p className="text-gray-700">Date: {eventDetails.date}</p>
        <p className="text-gray-700">Time: {eventDetails.time}</p>
        <p className="text-gray-700">Location: {eventDetails.location}</p>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <h3 className="text-xl font-bold mb-4">Selected Tickets</h3>
      <ul className="list-disc pl-6">
        {selectedTickets.map((ticket, index) => (
          <li key={index} className="text-gray-700">
            {ticket.type} - {ticket.quantity} tickets
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const eventDetails = {
    title: "Awesome Event",
    date: "December 25, 2023",
    time: "7:00 PM",
    location: "Event Venue",
  };

  const selectedTickets = [
    { type: "VIP", quantity: 2 },
    { type: "General Admission", quantity: 3 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <EventDetailsFrame
        eventDetails={eventDetails}
        selectedTickets={selectedTickets}
      />
    </div>
  );
};

export default App;
