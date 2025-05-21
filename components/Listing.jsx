
import React, { useState, useEffect, useRef } from 'react';
const url="https://sd-6310-2025-summer-express-app.onrender.com/api/fortune-cookie"
const Listing =()=>{
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchInputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    //runs only on mount
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
    const handleClearSearch=()=>{
        setSearchTerm('');
        searchInputRef.current.value="";
        searchInputRef.current.focus(); //put the cursor back into the search bar

    }
    return(
        <div>  
            <h1>Listings</h1>
            <input
                type="text"
                ref={searchInputRef}
                placeholder="Search listings"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button onClick={handleClearSearch}>Clear</button>
            <p>{listings.message}</p>
            <p>{listings.fortune}</p>
            <p>{listings.luckNumber}</p>
        </div>
    )

}


export default Listing;