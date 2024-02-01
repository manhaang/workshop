
import './App.css';
import { useState } from 'react';
import FirstComponent from './component/FirstComponent'


function App() {
 
    const [data , setData] = useState({
      name : "john Doe",
      age : 30,
      position : "Full Stack Develope"

    })

    return (
      
        <div>
          <FirstComponent data={data} />

        </div>

      

  )
}

export default App
