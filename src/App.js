import React from 'react';
import './App.css';
import TableView from "./TableView";
import CardView from "./CardView";

function App(){
    TableView();
    return (<div>
        <button onClick={TableView}>
            Таблица
        </button>

        <button onClick={CardView}>
            Карточки
        </button>
    </div>);
}
export default App;



