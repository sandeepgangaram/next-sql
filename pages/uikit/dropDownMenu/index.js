import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const DropdownDemo = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const onCountryChange = (e) => {
        console.log(e.value);
    };

    return (
        <div className="dropdown-demo">
            <div className="card">
                <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country" />
            </div>
        </div>
    );
};

export default DropdownDemo;
