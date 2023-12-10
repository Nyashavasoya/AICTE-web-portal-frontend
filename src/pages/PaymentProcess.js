import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentProcess = () => {

    const navigate = useNavigate();

    const onsubmitHandler = () => {
        navigate('/');
    }

  return (
    <><div>
          Payment-Process
      </div>
      <button type='submit' onClick={onsubmitHandler}>Submit</button>
      </>
  )
}

export default PaymentProcess
