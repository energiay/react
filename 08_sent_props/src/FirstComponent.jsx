import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = (props) => {
    return (
        <div>
            <SecondComponent {...props}/>
        </div>
    )
}

export default FirstComponent;