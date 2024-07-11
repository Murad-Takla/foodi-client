import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/items`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])

    // console.log(items)
    return (
        <>
            <div className="flex items-center justify-center bg-gradient-to-tr to-[#E10101] from-[#EE494B] p-10">
                <div>
                    <h1 className="animate-typing text-5xl text-white font-bold">
                        Foods
                    </h1>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 justify-items-center'>

                {
                    items.map(item => <ItemDetails item={item} key={item.idCategory} ></ItemDetails>)
                }

            </div>
        </>
    );
};

export default Items;