import React from 'react'
import Hello from './Hello'

const SecondComponent = (props) => {
    return (
        <div>
            <Hello {...props}/>
        </div>
    )
}

export default SecondComponent;