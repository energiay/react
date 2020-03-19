import React from 'react';
import Classes from './Layout.module.css';

class Layout extends React.Component {
    
    
    render() {
        return (
            <div className={Classes.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;