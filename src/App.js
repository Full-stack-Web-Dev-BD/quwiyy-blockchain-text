import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import InputCard from './InputCard';



const App = () => {

  return (
    <div>
      <div className='container mt-5'>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className='container_'>
          <div className='box'>
            <InputCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
