import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL


const New = () => {
    const navigate = useNavigate()
    const [snacks, setSnacks] = useState({
        id: '',
        name: '',
        fiber: '',
        protein:'',
        added_sugar:'',
        is_healthy: false,
        image: '',
    })





    // return (

    // )

};

export default New;
