import React, { Component } from 'react';
import TodoItems from './TodoItems.jsx';
import "./TodoList.css";



class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this)
        this.delItem = this.delItem.bind(this)
    }

    addItem(e) {
        e.preventDefault();
        
        const items = [...this.state.items]

        if (this._inputElement.value.length > 0) {
            items.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
        }

        this.setState({
            items
        });

        this._inputElement.value = '';
        this._inputElement.focus();
    }

    delItem(id) {
        const items = this.state.items.filter( (item) => {
            return item.key !== id
        } );

        this.setState({
            items
        });
    }


    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input 
                            placeholder="введите задачу" 
                            ref={ (elem) => this._inputElement = elem}
                        />
                        <button type="submit">добавить</button>
                    </form>
                </div>
                <TodoItems items={this.state.items} delItem={this.delItem} />
            </div>
        )
    }
}

export default TodoList;