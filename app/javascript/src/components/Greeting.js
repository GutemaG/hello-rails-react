import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
  const message = useSelector((state) => state.greeting.message)
  const status = useSelector((state) => state.greeting.status)
  return (
    <h3>{status === 'success' ? message.message : "comming soon...."}</h3>
  )
}

export default Greeting
