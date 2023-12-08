import React, { useEffect } from 'react'

import { IoTicket } from 'react-icons/io5'
import Ticket from '../../components/Ticket';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoicePage = () => {
    const { state } = useLocation();

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        const data = await html2canvas(document.querySelector("#invoice"));
        const img = data.toDataURL("image/png");  
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
    };

    useEffect(() => {
        createPDF();
    }, [state])

  return (
    <>
        <div id="invoice" className='bg-white'>
            <div className='bg-[#e14658]'>
                <header className='max-w-6xl mx-auto'>
                    <div className='py-4 flex flex-row items-center gap-4'>
                        <IoTicket className='text-4xl text-white'/>
                        <p className='text-3xl font-bold text-white'>PassGrabs</p>
                    </div>
                </header>
            </div>

            <div className='max-w-6xl mx-auto flex flex-col gap-2 text-[#556987] text-base py-4'>
                <h1 className='text-2xl font-semibold text-black'>Invoice</h1>
                
                <div className='flex flex-row justify-between'>
                    <p>Invoice to {state.fullname}</p>
                    <p>Invoice ID: YCCURW-000000</p>
                </div>

                <div className='flex flex-row justify-between'>
                    <p>{state.city}, {state.state}</p>
                    <p>Order Date: {new Date().toDateString()}</p>
                </div>

                <div className='flex flex-row justify-between'>
                    <p>{state.state}, {state.country}</p>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8">
                    <table className="w-full text-sm text-left">
                        <thead className="text-sm text-[#556987] bg-[#F7F8F9]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Event Detail
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Event Type
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Ticket
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Unit Price
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Discount
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold text-sm">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-6 py-4 font-semibold text-black">
                                    1
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    {state.event.Title}
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    {state.event.Type}
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    x{state.quantity}
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    ${state.price}
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    $0.00
                                </td>
                                <td className="px-6 py-4 font-semibold text-black">
                                    ${(state.price * state.quantity) + 13 / 100 * (state.price * state.quantity)}
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='p-4 font-bold text-black text-sm text-left'>
                                    Invoice Total: USD {(state.price * state.quantity) + 13 / 100 * (state.price * state.quantity)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {
                    [...Array(Number(state.quantity))].map((_, index) => (<Ticket key={index} event={state.event} price={state.price} />))
                }
            </div>
            
        </div>
    </>
  )
}

export default InvoicePage