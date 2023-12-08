import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Input } from './Input';

const PersonalInfoForm = ({ methods, handleSubmit, price, quantity, event }) => {
  return (
    <FormProvider {...methods}>
      <form className='flex flex-row justify-between gap-8' onSubmit={e => e.preventDefault()} noValidate>
        <div className='grow-[2] text-white bg-[#1C1C24] border-[2px] rounded-lg border-[#252D3C] p-4'>
          <h2 className='font-semibold text-lg mb-8'>Information</h2>

          <section className='flex flex-col gap-4'>
            <Input
              name="fullname"
              label="Full Name"
              type="text"
              id="fullname"
              placeholder="eg. Jane Copper"
              validation={{
                  pattern: {
                    value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                    message: 'fullname must contain only alphabetical characters and spaces'
                  }
              }} />

            <div className='flex flex-row justify-between gap-4'>
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="eg. janecooper@xyz.com "
                  validation={{
                      required: {
                          value: true,
                          message: 'email field is required' 
                      },
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'enter a valid email address'
                      }
                  }} />

                <Input
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  placeholder=""
                  validation={{
                      required: {
                          value: true,
                          message: 'address field is required' 
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9\s,'-]*$/,
                        message: 'address must contain only alphanumeric characters, spaces, commas, apostrophes, and dashes'
                      }
                  }} />
            </div>

            <div className='flex flex-row justify-between gap-4'>
              <Input
                name="country"
                label="Country"
                type="text"
                id="country"
                placeholder=""
                validation={{
                    required: {
                        value: true,
                        message: 'country field is required' 
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: 'country must contain only alphabetical characters'
                    }
                }} />

              <Input
                name="state"
                label="State"
                type="text"
                id="state"
                placeholder=""
                validation={{
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: 'state must contain only alphabetical characters'
                    }
                }} />
            </div>

            <div className='flex flex-row justify-between gap-4'>
              <Input
                name="city"
                label="City"
                type="text"
                id="city"
                placeholder=""
                validation={{
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: 'city must contain only alphabetical characters'
                    }
                }} />

              <Input
                name="zip"
                label="Zip/Post Code"
                type="text"
                id="zip"
                placeholder=""
                validation={{
                    required: {
                        value: true,
                        message: 'Zip/Post Code field is required' 
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: 'Zip/Post Code must be alphanumeric characters'
                    }
                }} />
            </div>
          </section>
        </div>

        <div className='grow-[.5] text-white bg-[#1C1C24] border-[2px] rounded-lg border-[#252D3C] px-4 py-8 flex flex-col gap-4'>
          <h1 className='font-semibold text-2xl border-b-[2px] border-[#252D3C] pb-4'>Checkout Summary</h1>

          <div className='border-b-[2px] border-[#252D3C] pb-4'>
            <h2 className='font-semibold text-base'>{event.Title}</h2>
            <p className='text-sm text-[#97ABC0]'>{event.Type} • {event.Country}</p>
          </div>
          
          <div className='text-sm flex flex-col gap-2 border-b-[2px] border-[#252D3C] pb-4'>
            <div className='flex justify-between'>
              <p className='text-[#97ABC0]'>Normal</p>
              <p>X{quantity}</p>
              <p className='font-bold'>${price}</p>
            </div>

            <div className='flex justify-between'>
              <p className='text-[#97ABC0]'>Sub Total</p>
              <p className='font-bold'>${quantity * price}</p>
            </div>

            <div className='flex justify-between'>
              <p className='text-[#97ABC0]'>Tax( 13 % )</p>
              <p className='font-bold'>${ 13/100 * quantity * price}</p>
            </div>

            <div className='flex justify-between'>
              <p className='text-[#97ABC0]'>Discount( 0 % )</p>
              <p className='font-bold'>$0</p>
            </div>
          </div>

          <div className='flex justify-between border-b-[2px] border-[#252D3C] pb-4'>
            <p className='text-[#97ABC0]'>Total</p>
            <div className='flex items-center gap-2'>
              <p className='text-xs'>USD</p>
              <p className='text-xl font-bold'>{ (13/100 * quantity * price) + (quantity * price)}</p>
            </div>
          </div>

          <button className='hover:bg-[#2b6956] text-white text-base font-semibold px-8 py-4 bg-[#E14658] rounded-xl' onClick={handleSubmit}>
            Confirm & pay</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default PersonalInfoForm