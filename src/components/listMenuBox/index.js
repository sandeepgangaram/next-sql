import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import ReactTooltip from 'react-tooltip';

const initialQueries = [
    { name: 'Cars Data', query: 'SELECT * FROM cars;' },
    { name: 'Bikes Data', query: 'SELECT * FROM bikes;' },
    { name: 'Trucks Data', query: 'SELECT * FROM trucks;' }
];
const ListMenuBox = forwardRef(({ loadData }, ref) => {
    const [queries, setQueries] = useState(initialQueries);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setShowTooltip(true);
    }, []);

    useImperativeHandle(ref, () => ({
        saveQueryData(obj) {
            setQueries([obj, ...queries]);
        }
    }));

    const countryTemplate = (option) => {
        return (
            <>
                <div data-for={option.name} data-tip={option.query}>
                    <Button label={option.name} icon="pi pi-play" className="p-button-secondary p-button-outlined" style={{ width: '100%', border: 'none' }} onClick={() => loadData(option)} />
                </div>
                {showTooltip && <ReactTooltip id={option.name} />}
            </>
        );
    };

    return (
        <div className="card" style={{ padding: '8px 0 0 0' }}>
            <h5 style={{ padding: '2px 0 0 12px' }}>
                All Queries <Badge value={queries.length} />
            </h5>
            <ListBox options={queries} onChange={() => {}} multiple filter optionLabel="name" itemTemplate={countryTemplate} style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100%' }} listStyle={{ minHeight: '100%' }} />
        </div>
    );
});

export default ListMenuBox;
