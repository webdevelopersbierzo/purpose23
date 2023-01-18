import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
            <div>
           
            {
                <ul>
                    {/* TODO COMPONENTE PURPOSE */}
                      
                </ul>
            }    
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
