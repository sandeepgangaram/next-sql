import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import ReactTooltip from 'react-tooltip';

const initialCountries = [
    { name: 'Cars Data', query: 'SELECT * FROM cars;' },
    { name: 'Bikes Data', query: 'SELECT * FROM bikes;' },
    { name: 'Trucks Data', query: 'SELECT * FROM trucks;' }
];
const ListBoxDemo = forwardRef(({ loadData }, ref) => {
    const [countries, setCountries] = useState(initialCountries);

    useImperativeHandle(ref, () => ({
        saveQueryData(obj) {
            setCountries([obj, ...countries]);
        }
    }));

    const countryTemplate = (option) => {
        return (
            <>
                <div data-for={option.name} data-tip={option.query}>
                    <Button label={option.name} icon="pi pi-play" className="p-button-secondary p-button-outlined" style={{ width: '100%', border: 'none' }} onClick={() => loadData(option)} />
                </div>
                <ReactTooltip id={option.name} />
            </>
        );
    };

    return (
        <div className="card" style={{ padding: '8px 0 0 0' }}>
            <h5 style={{ padding: '2px 0 0 12px' }}>
                All Queries <Badge value={countries.length} />
            </h5>
            <ListBox options={countries} onChange={() => {}} multiple filter optionLabel="name" itemTemplate={countryTemplate} style={{ width: '100%' }} listStyle={{ maxHeight: '125px' }} />
        </div>
    );
});

export default ListBoxDemo;
