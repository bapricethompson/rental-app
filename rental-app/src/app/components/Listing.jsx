
"use client"; 
import ListingCard from './ListingCard';
import React, { useState, useEffect, useRef } from 'react';
const url="https://sd-6310-2025-summer-express-app.onrender.com/gear"
const Listing =()=>{
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const listingSectionRef = useRef(null);
    //runs only on mount
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setListings(data);
            setIsLoading(false);
            if (listingSectionRef.current) {
                    listingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            
        })
        .catch((error) => {
            console.error("error", error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return(
        <div>  
            <div className="" ref={listingSectionRef}>
                <ListingCard listings={listings} />
            </div>
        </div>
    )

}


export default Listing;