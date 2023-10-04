import React, { useState , useEffect } from 'react'
import arrow from './arrow.png'
import '../App.css'



export const Newa = () => {
    const [list, listUpdate] = useState([])
    const [Api, apiUpdate] = useState([])
    const [done, doneUpdate] = useState([])
    const [text,textUpdate] = useState([])
    useEffect(() => {
        console.log("first update")
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                apiUpdate(json)
            })
    }, [])



    useEffect(()=> {
        document.title = `add : ${list}`
        console.log("list or done change")
    },[list, done])
    useEffect(()=> {
        console.log("track list")
    }, [list])
    useEffect(()=> {
        console.log("track Done")
    }, [done])
    useEffect(()=> {
        console.log("update")
    })









    // --------------------

    const handleAdd = () => {
        listUpdate([...list, text])
        textUpdate("")
    }

    const handleDone = (index) => {
        let data = [...list]
        let move = data.splice(index, 1)
        doneUpdate([...done, ...move])
        listUpdate(data)
    }
    const handleDelete = (index) => {
        let data = [...done]
        data.splice(index, 1)
        doneUpdate(data)
    }
    const handleBack = (index) => {
        let data = [...done]
        let move = data.splice(index, 1)
        listUpdate([...list, ...move])
        doneUpdate(data)
    }



    console.log(useState(0))
    return (
        <div style={{ display: "grid", gridTemplateColumns: "300px 300px", justifyContent: "center", justifyItems: "center", gap: "10px" }}>
            <div>
              <ul style={{ listStyle: "none" }}>
                {list.map(((text, index) => <li key={index}>{text} <span onClick={() => handleDone(index)}><img src={arrow} style={{ width: "15px", verticalAlign: "bottom" }} /></span> </li>))}
              </ul>
              <div>
                   <input type="text" value={text} onChange={(e) => textUpdate(e.target.value)} />
                    <button onClick={handleAdd}> add text </button>
                    
                </div>
            </div>
            <div>
                <h3> Done </h3>
                <h3 > Done </h3>
                <ul style={{ listStyle: "none" }}>
                    {done.map((text, index) => <li key={index}>{text}<span>
                        <button onClick={() => handleDelete(index)}>delete</button>
                        <button onClick={() => handleBack(index)}>back</button>
                    </span></li>)}
                </ul>
            </div>
            
            
            
            <div className="table">
                <table>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                    {Api.map((obj => {
                        return (<tr>
                            <td>{obj.userId}</td>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                        </tr>)
                    }))}

                </table>
            </div>
        </div>
    )
}
