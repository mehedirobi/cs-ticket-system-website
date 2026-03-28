import React from 'react'

const Task = ({ tasks, handleComplete }) => {
  if(!tasks || tasks.length === 0) 
    return <p className='text-gray-500'>Click on a ticket to add tasks</p>

  return (
    <div className="flex flex-col gap-4">
      {tasks.map(task => (
        <div key={task.id} className="p-3 rounded shadow bg-yellow-100">
          <h4 className="font-bold">{task.title}</h4>
          <p className="text-xs text-gray-600">{task.customer}</p>
          <button
            onClick={() => handleComplete(task.id)}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Task