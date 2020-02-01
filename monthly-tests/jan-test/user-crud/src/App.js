import React from 'react'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'

const App = () => {
  return (
    <div className="flex-container">
      <AddUser />
      <ViewUser />
    </div>
  )
}

export default App
