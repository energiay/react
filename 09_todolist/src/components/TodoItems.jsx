import React from 'react'

const TodoItems = (props) => {
    return (
        <div>
            <ul className="theList">
            {
                props.items.map( (item) => (
                    <li key={item.key} onClick={ () => {props.delItem(item.key)} }>
                        {item.text}
                    </li>
                 ) )
            }
            </ul>            

        </div>
    )
}

export default TodoItems;