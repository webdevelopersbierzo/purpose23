import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Purpose from './Purpose';
const baseUrl = "https://purpose23-production.up.railway.app/"

const PurposeList = () => {

    const [purposes, setPurposes] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
     axios.get(baseUrl + "api/v1/purposes")
        .then((response)=> {
            if(response.status === 200){
                setPurposes(response.data)
                setIsReady(true);
            }          
            
        })
        .catch(error => console.log(error));
        

    }, [])

    if(isReady){
        return (
            <div className="flex flex-col w-11/12 md:flex-row md:flex-wrap md:justify-center">               
                    {purposes.map((purpose, index)=>(
                        <Purpose data={purpose} key={index}></Purpose>
                    ))}                            
            </div>
        )

    }
    
    return (
        <div>
            Loading...
        </div>
    );
}

export default PurposeList;
