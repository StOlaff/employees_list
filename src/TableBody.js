import React from 'react';
import './App.css';

//formatting data in table view
function TableBody() {
    let myElem_arr = [];
    for (let i = 0; i < window.user_list.length; i++) {
        let entries_arr = [];
        for (let j=0; j < window.user_list[i].length; j++){
        entries_arr.push(
            <td>{window.user_list[i][j]}</td>
        );
        }
        myElem_arr.push(<tr>{entries_arr}</tr>);
    }
    return myElem_arr
}

export default TableBody;
