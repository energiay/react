import React from 'react'
import FirstComponent from './FirstComponent'

const App = (props) => {
    
    let myStyle = {
        width: '200px',
        margin: '50px auto',
        fontSize: '23px',
        fontWeight: '800'
    }
    
    return (
        <div>
            <FirstComponent {...myStyle}/>
        </div>
    )
}

export default App;