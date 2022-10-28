import React from 'react'
import { useState } from 'react';
import Menuapi from "./Menuapi"
import Menucard from './Menucard';
import Header from './Header';



const uniqueList = [...new Set(Menuapi.map((curElem) => {
  return curElem.category
})
), "All"]




const Home = () => {

  const [menuData, setmenuData] = useState(Menuapi);
  const [menuList, setmenuList] = useState(uniqueList)
  const FilterItem = (category) => {
    if (category === "All") {
      setmenuData(Menuapi)
      return
    }
    const Updatedlist = Menuapi.filter((curElem) => {
      return curElem.category === category;
    })
    setmenuData(Updatedlist)
  }
  return (
    <>
      <Header FilterItem={FilterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
}

export default Home