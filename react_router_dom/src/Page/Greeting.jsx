import React from 'react'
import { useParams} from 'react-router-dom'

function Greeting() {

    let {name} = useParams()
  return (
    <h2>Hello,{name}</h2>
  )
}

export default Greeting