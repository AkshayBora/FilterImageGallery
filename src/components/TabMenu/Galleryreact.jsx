import React, { useState } from 'react';
import "../TabMenu/tabs.css";
import CatMenu from './CatMenu';
import Menu from "./menu";
import MenuItems from './MenuItems';


const allCatValues = [...new Set(Menu.map((currElem) => currElem.category )), "All"]
console.log(allCatValues);

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems,setCatItems] = useState(allCatValues);

    const filterItem = (categItem) => {

        if (categItem === "All") {
            setItems(Menu);
            return; 
        }

        const updatedItems = Menu.filter((currElem) => {
            return currElem.category === categItem;
        })
        setItems(updatedItems);
    }


    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />
  
            {/* Our menu list show here */}
            <CatMenu filterItem={filterItem} catItems={catItems}/>

            {/* main section starts */}
            <MenuItems items={items}/>

        </>
    )
}

export default GalleryReact
