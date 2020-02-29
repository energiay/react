var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 
const propsValues = {
    title: "Сотрудники",
    items: [
        "Тулинов Иван Владимирович",
        "Иванов Иван Иванович",
        "Петров Петр Петрович", 
        "Иванова Мария Сергеевна", 
        "Алешине Елена Ивановна", 
        "Фирсов Иван Петрович"
    ]
};
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)