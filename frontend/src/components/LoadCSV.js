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
        <form>
            <label>
            Upload CSV:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        
        
    )

}