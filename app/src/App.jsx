import { AppProvider, useAppContext } from './context/AppContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import UserAddPopup from './components/UserAddPopup'
import EditUserPopup from './components/EditUserPopup'
import DeleteUser from './components/DeleteUser'
import { useContext } from 'react'

function App() {
  const context = useAppContext();
  if (!context) return null; // Prevent error if context is undefined

  const {
    showAddUser,
    setShowAddUser,
    showEditUser,
    setShowEditUser,
    showDeleteUser,
    setDeleteUser
  } = context;

  return (
    <>
      <div className='relative'>
      <Banner />
      <Home />
      <UserDetails />
      </div>
      {showAddUser && <UserAddPopup />}
      {showEditUser && <EditUserPopup />}
      {showDeleteUser && <DeleteUser />}
    </>
  )
}

export default App
