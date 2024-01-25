import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})

  console.log(data);

  useEffect(() => {

    axios.get('http://localhost:3000/api/data').then(res => {
      setData(res.data);
    }).catch(err => {
      console.error("Error fetching data: ", err)
    })

  }, [])

  return (
    <>
      <div>
        {data.message}
      </div>
    </>
  )
}

export default App

