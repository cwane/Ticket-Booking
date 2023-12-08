import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, createSearchParams } from 'react-router-dom'

import Cards from '../../components/Cards';
import OrderTicket from './../../components/OrderTicket';

const EventDetailsPage = () => {
    const basePrice = 500;
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState({});
    const [ticketQty, setTicketQty] = useState(1);

    const submitHandler = () => {
        navigate({
            pathname: `/confirm-order/${id}`,
            search: createSearchParams({
                price: basePrice,
                quantity: ticketQty
            }).toString()
        });
    }
    
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            setEvent(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id])

  return (
    <div>
        <section className='max-w-6xl mx-auto py-24 flex flex-row justify-between'>
            { loading ? <p>Loading...</p> : <Cards info={event} /> }
            { loading ? <p>Loading...</p> : <OrderTicket info={event} quantity={ticketQty} setQuantity={setTicketQty} basePrice={basePrice} submitHandler={submitHandler} /> }
        </section>
    </div>
  )
}

export default EventDetailsPage