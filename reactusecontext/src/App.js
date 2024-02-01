<<<<<<< HEAD

import './App.css';
import { useState } from 'react';
import FirstComponent from './component/FirstComponent'
=======
import React, { useReducer, useState } from 'react';
import './App.css';
import LoginArea from'./LoginArea';
>>>>>>> 4cbd200c06fce237dda6b7736312b87e7e0f0f6f

function reducer(state, action){
  if (action.type === 'login'){
      const { username, fullname } = action.payload;
      return { username, fullname};
  }
  if (action.type === 'logout'){
      return null;
  }
  return state;
}



const AuthContext = React.createContext();

function App() {
<<<<<<< HEAD
 
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
=======
  const [authState, authDispatch] = useReducer(reducer, null);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <section classNmae="app-section">
        <div>
          <LoginArea />

        </div>
      </section>
    </AuthContext.Provider>
  );
}

export {AuthContext};
export default App;
>>>>>>> 4cbd200c06fce237dda6b7736312b87e7e0f0f6f
