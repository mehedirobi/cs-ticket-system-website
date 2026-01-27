import './App.css'
import { useState, useEffect } from 'react'
// import Banner from './components/Banner/Banner'
// import Navbar from './components/Navbar/Navbar'
// import Card from './components/Card/Card'
// import Task from './components/Task/Task'
// import Footer from './components/Footer/Footer'
 import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  const handleCardClick = (ticket) => {
    if (!tasks.find(t => t.id === ticket.id)) {
      setTasks([...tasks, ticket])
      toast(`${ticket.title} - Added to Task Status`)
    } else {
      toast(`${ticket.title} already in Task Status`)
    }
  }

  const handleComplete = (id) => {
    const completedTask = tasks.find(t => t.id === id)
    if (completedTask) {
      setTasks(tasks.filter(t => t.id !== id))              
      setResolved([...resolved, completedTask])             
      setTickets(tickets.filter(ticket => ticket.id !== id))
      toast(`Task "${completedTask.title}" completed!`)
    }
  }

  return (
    <>
      <Navbar />
      <Banner 
        inProgressCount={tasks.length} 
        resolvedCount={resolved.length} 
      />

      <div className='flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto'>

        {/*Left side card section */}
        <div className='md:col-span-3'>
          <Card 
            tickets={tickets} 
            handleCardClick={handleCardClick} 
          />
        </div>

        {/*Right side task section */}
        <div className='md:col-span-2'>
          <Task 
            tasks={tasks} 
            resolved={resolved} 
            handleComplete={handleComplete} 
          />
        </div>
      </div>

      <Footer />
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
