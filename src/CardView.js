import React from 'react';
import './App.css';
import CardBody from "./CardBody";
import ReactDOM from 'react-dom';

function CardView() {
    let tmp_var = [],
        cards = [],
        myContainer = document.getElementById('my_table');

    for (let i = 0; i < window.tab_head.length; i++) {
        tmp_var.push(<th>{window.tab_head[i]}</th>)
    }
    for (let j = 0; j < window.user_list.length; j++) {
        cards.push(<table class="out_table">
            <thead>
            <tr>
                {tmp_var}
            </tr>
            </thead>
            <tbody>
            <tr>
                {CardBody(j)}
            </tr>
            </tbody>

        </table>)
    }
    return ReactDOM.render(cards , myContainer);
}
export default CardView;
