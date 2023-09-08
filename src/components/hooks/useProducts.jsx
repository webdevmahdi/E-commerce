import React, { useEffect, useState } from 'react'

const useProducts = () => {
    let [clothes, setClothes] = useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setClothes(data))
    },[])
    return [clothes, setClothes];
}

export default useProducts;