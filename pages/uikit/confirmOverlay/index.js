import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

const ConfirmOverlay = ({ code, saveQuery }) => {
    const [value, setValue] = useState('');
    const [notValid, setNotValid] = useState(false);
    const [displayBasic, setDisplayBasic] = useState(false);
    const toast = useRef(null);

    const showSuccess = (name) => {
        toast.current.show({ severity: 'success', summary: 'Perfect!', detail: `${name} added to the list.`, life: 2000 });
    };
    const saveHandler = () => {
        if (!value) {
            setNotValid(true);
            return;
        }
        setDisplayBasic(false);
        saveQuery({
            name: value,
            query: code
        });
        showSuccess(value);
    };

    const basicDialogFooter = (
        <>
            <Button type="button" label="Nope" onClick={() => setDisplayBasic(false)} icon="pi pi-times" className="p-button-danger" />
            <Button type="button" label="Save" onClick={saveHandler} icon="pi pi-check" className="p-button-success" />
        </>
    );

    const changeHandler = (e) => {
        if (!!e.target.value) {
            setNotValid(false);
        }
        setValue(e.target.value);
    };
    return (
        <>
            <Toast ref={toast} />
            <div className="grid">
                <div className="col-12 lg:col-6">
                    <Dialog header="Save Query" visible={displayBasic} style={{ width: '30vw', display: 'flex', flexDirection: 'column' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <>
                            <h5>{code}</h5>
                            <span>
                                <InputText type="text" placeholder="Give a name" value={value} onChange={changeHandler} />
                                {notValid && <Message severity="error" text="Can't be empty" />}
                            </span>
                        </>
                    </Dialog>
                </div>
            </div>

            <div data-for="save-query" data-tip="Save Query">
                <Button type="button" label="Save" icon="pi pi-check" className="p-button-success" onClick={() => setDisplayBasic(true)} />
            </div>
        </>
    );
};

export default ConfirmOverlay;
