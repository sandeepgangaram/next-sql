import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Help Text</h5>
                <div className="field">
                    <label htmlFor="username1" className="block">
                        Username
                    </label>
                    <InputText id="username1" aria-describedby="username1-help" className="block" />
                    <small id="username1-help" className="block">
                        Enter your username to reset your password.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default InputTextDemo;
