import React from 'react';
import './App.css';

//formatting data in table view
function CardBody(entry_id) {
    let myElem_arr = [];
    for (let j=0; j < window.user_list[entry_id].length; j++){
        myElem_arr.push(<td>{window.user_list[entry_id][j]}</td>);
    }
    return myElem_arr
}
export default CardBody;
