import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(city);
        console.log(city);
    };

    console.log(city)
    return (
        <section className=' w-full flex justify-center items-center'>
            <form className=' h-12 w-full my-10 flex gap-3 mx-4' onSubmit={handleSearch}>
                <div className=' w-5/6 border rounded-md flex flex-row justify-center align-middle items-center p-4'>
                    <IoSearch/>
                    <input className='h-full w-full p-4 rounded-md focus:outline-none' type="search" placeholder='Enter city name' value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <button type='submit' className=' py-2 px-5 md:px-8 xl:px-12 bg-blue-700 rounded-lg text-white' >Search</button>
            </form>
        </section>
    )
}
