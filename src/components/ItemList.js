import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Itemlist() {
    const [items, setItems] = useState([]);
    const columns = [
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'quantity', headerName: 'Quantity', width: 50},
        {field: 'category', headerName: 'Category', width: 200},
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <button
                    onClick={() => onDelClick(row.id)}>Delete
                </button>
        }
    ];

    useEffect(() => {
        fetchItems()
    }, []);

    const fetchItems = () => {
        fetch('http://localhost:8080/api/items')
            .then(response => response.json())
            .then(data => setItems(data._embedded.items))
            .catch(err => console.error(err));
    }

    const onDelClick = (url) => {
        fetch(url, {method: 'DELETE'})
            .then(response => fetchItems())
            .catch(err => console.error(err))
    }

    return(
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={items}
                columns={columns}
                getRowId={row => row._links.self.href}/>
        </div>
    );
}
export default Itemlist;