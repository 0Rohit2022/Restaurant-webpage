import React from 'react'

const Header = ({ FilterItem, menuList }) => {
    return (
        <>

            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((curElem) => {
                            return <button className="btn-group__item" onClick={() => FilterItem(curElem)}>{curElem}</button>
                        })}





                </div>
            </nav>
        </>
    )
}

export default Header