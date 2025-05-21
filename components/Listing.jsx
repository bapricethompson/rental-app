
import React, { useState, useEffect, useRef } from 'react';
const url="https://sd-6310-2025-summer-express-app.onrender.com/api/fortune-cookie"
const Listing =()=>{
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchInputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setListings(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("error", error);
            setError(err.message);
        setIsLoading(false);
        });
    }, []);
    return(
        <div>  
            <p>{listings.message}</p>
        </div>
    )

}


export default Listing;