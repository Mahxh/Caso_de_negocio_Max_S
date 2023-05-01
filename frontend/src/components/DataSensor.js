import React, {useState, useEffect} from 'react';
import axios from 'axios';

//const API = process.env.REACT_APP_API;
const API = 'http://localhost:5000'
export default function LoadCSV(){
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const [EventsList, setEventsList] = useState([]);
    
    const getEvents = async () => {
        const data = await axios.get(`${API}`)
        const {Events} = data.data
        const eventos = data.data
        
        console.log(typeof(data.data))
        console.log(Events)
        return setEventsList(eventos)

    }
    useEffect(()=>{
        getEvents();
    }, [])

    return(

        
        <table>
                <thead>
                    <th>name_sensor</th>
                    <th>value</th>
                    <th>unit</th>
                    <th>timestamp</th>
                </thead>
                <tbody>
                    {EventsList && EventsList.map((events) => (
                        <tr>
                            <td>{events.name_sensor}</td>
                            <td>{events.value}</td>
                            <td>{events.unit}</td>
                            <td>{events.timestamp}</td>
                        </tr>
                        
            
            ))}
                              
                </tbody>
            </table>
    )

}