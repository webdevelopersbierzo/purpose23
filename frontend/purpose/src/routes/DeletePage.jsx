import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/menu';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router';

const DeletePage = () => {

    const param = useParams();
    const navigate = useNavigate()

    console.log(param.id)
    const [purpose, setPurpose] = useState([]);
    const [isReady, setIsReady] = useState(false)

     useEffect(() => {
      axios.get(`https://purpose23-production.up.railway.app/api/v1/purposes/${param.id}`)
        .then((response)=> {
            if(response.status === 200){
                setPurpose(response.data)
                setIsReady(true)
            }
        })
        .catch(error => console.log(error));
    }, []) 
    

    const deletePurpose = () => {
        axios
        .delete(`https://purpose23-production.up.railway.app/api/v1/purposes/${param.id}`)
        .then(()=>{
            alert("Post deleted");
            setPurpose(null)
            navigate("/profile")
        })
        .catch(function(error) {
            alert("Error-> Not delete")
        })

    }
    if(!purpose) return (
        <div className="w-full bg-slate-900 h-screen">
        <Menu />
        <p>Purpose delete !!!!!</p>
       
        
    </div>

    )
    return (
        <div className="w-full bg-slate-900 h-screen">
            <Menu />
            <div className='flex flex-col w-full items-center  bg-gray-100'>
                <h2 className='text-2xl p-4'>Delete purpose</h2>
                <p> Danger you will erase a purpose</p>
                <button type='submit' className='bg-red-500 pt-2 pb-2 pl-4 pr-4 mt-4 text-white' onClick={deletePurpose} >Delete</button> 
                           
            </div>
           
            
        </div>
    );
};


DeletePage.propTypes = {

};


export default DeletePage;
