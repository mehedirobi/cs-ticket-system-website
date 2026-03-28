import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Task from './components/Task/Task'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [tickets, setTickets] = useState([])
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error("Failed to load tickets", err))
  }, [])

  const handleCardClick = (ticket) => {
    if (!tasks.find(t => t.id === ticket.id) && !resolved.find(t => t.id === ticket.id)) {
      setTasks([...tasks, ticket])
      toast(`${ticket.title} added to Task Status`)
    } else {
      toast(`${ticket.title} already added`)
    }
  }

  const handleComplete = (id) => {
    const completedTask = tasks.find(t => t.id === id)
    if (!completedTask) return
    setTasks(tasks.filter(t => t.id !== id))
    setResolved([...resolved, { ...completedTask, status: 'resolved' }])
    toast(`Task "${completedTask.title}" completed!`)
  }

  return (
    <>
      <Navbar />
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />

      <div className="max-w-[1200px] mx-auto px-4 py-8 flex gap-6">

        {/* Left: Customer Tickets */}
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card tickets={tickets} handleCardClick={handleCardClick} />
          </div>
        </div>

        {/* Right: Task Status */}
        <div className="w-1/4 flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-4">Task Status</h2>
          <Task tasks={tasks} handleComplete={handleComplete} />
          <div>
            <h3 className="font-bold text-lg mb-2">Resolved Tasks</h3>
            {resolved.length === 0 ? (
              <p className="text-gray-500">No resolved tasks yet</p>
            ) : (
              resolved.map(t => (
                <div key={t.id} className="p-3 mb-2 rounded shadow bg-green-100">
                  <h4 className="font-bold">{t.title}</h4>
                  <p className="text-xs text-gray-600">{t.customer}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App