import React from 'react'

const Card = ({ tickets, handleCardClick }) => {
  if(!tickets || tickets.length === 0) 
    return <p className='text-gray-500 col-span-2'>No tickets found</p>

  return (
    <>
      {tickets.map(ticket => (
        <div
          key={ticket.id}
          onClick={() => handleCardClick(ticket)}
          className={`p-4 rounded-lg shadow cursor-pointer transition hover:scale-105
            ${ticket.status === 'inProgress' ? 'bg-green-100' : 'bg-blue-100'}`}
        >
          <h3 className='font-bold text-lg'>{ticket.title}</h3>
          <p className='text-sm mt-1'>{ticket.description}</p>
          <div className='flex justify-between mt-2 text-xs text-gray-600'>
            <span>ID: {ticket.id}</span>
            <span>Priority: {ticket.priority}</span>
          </div>
          <div className='flex justify-between mt-1 text-xs text-gray-600'>
            <span>Status: {ticket.status}</span>
            <span>Customer: {ticket.customer}</span>
            <span>Created: {ticket.createdAt}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card