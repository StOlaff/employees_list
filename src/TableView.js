import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import TableBody from "./TableBody";

function TableView() {
    let tmp_var = [],
        myContainer = document.getElementById('my_table');
    for (let i = 0; i < window.tab_head.length; i++) {
        tmp_var.push(<th>{window.tab_head[i]}</th>)
    }
    let myElem =
        <table class="out_table">
            <thead>
            <tr>
                {tmp_var}
            </tr>
            </thead>
            <tbody>
            {TableBody()}
            </tbody>
        </table>;
    return ReactDOM.render(myElem , myContainer)
}
export default TableView;
