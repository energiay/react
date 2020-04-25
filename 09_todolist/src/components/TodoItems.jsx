import React from 'react';
import FlipMove from 'react-flip-move';

const TodoItems = (props) => {
    return (
        <div>
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                {
                    props.items.map( (item) => (
                        <li key={item.key} onClick={ () => {props.delItem(item.key)} }>
                            {item.text}
                        </li>
                    ) )
                }
                </FlipMove>
            </ul>            

        </div>
    )
}

export default TodoItems;