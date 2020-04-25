import React from 'react'

const MenuButton = (props) => {
    return (
        <button
            id="roundButton"
            onMouseDown={props.handleMouseDown}
        >menu</button>
    )
}

export default MenuButton
