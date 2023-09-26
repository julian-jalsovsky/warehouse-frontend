import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Itemlist() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error(err));
    }, []);

    return(
        <div>
            <table>
                <tbody>
                {
                    items.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}
export default Itemlist;