import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PersonalInfoForm from '../../components/PersonalInfoForm';

const OrderConfirmationPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const methods = useForm();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ loading, setLoading ] = useState(true);
    const [ event, setEvent ] = useState({});
    const price = searchParams.get('price');
    const quantity = searchParams.get('quantity');

    const handleSubmit = methods.handleSubmit( async (data) => {
      const payload = {
        address: data.address,
        city: data.city,
        country: data.country,
        email: data.email,
        fullname: data.fullname,
        state: data.state,
        zip: data.zip,
        price: price,
        quantity: quantity,
        event: event
      }

      navigate(`/confirm-order/${id}/payment`, { state: payload });
    });

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
        <div className='max-w-6xl mx-auto pb-8'>
            <h1 className='text-2xl text-white font-semibold border-b-[1px] border-[#252D3C] pb-8 my-8'>Order Confirmation</h1>
            <section>
                {loading ? <p>Loading...</p> : <PersonalInfoForm methods={methods} handleSubmit={handleSubmit} price={price} quantity={quantity} event={event} />}
            </section>
        </div>
    </div>
  )
}

export default OrderConfirmationPage