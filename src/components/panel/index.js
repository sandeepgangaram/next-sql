import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';

import TableOverlay from '../tableOverlay';
import ConfirmOverlay from '../confirmOverlay';
import Table from '../table';
import ListMenuBox from '../listMenuBox';

const Panel = () => {
    const toast = useRef();
    const tableRef = useRef();
    const saveQueryRef = useRef();
    const [resultData, setResultData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [value, setValue] = useState('');

    const showWarn = () => {
        toast.current.show({ severity: 'warn', summary: 'Oops!', detail: 'SQL Query must end with ;', life: 2000 });
    };

    const onLoadingClick = () => {
        if (!value.trim().endsWith(';')) {
            showWarn();
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);

        const data = tableRef.current.fetchData();
        setResultData([...data]);
        setDataLoaded(true);
    };

    const loadSavedData = (data) => {
        setValue(data?.query);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);

        const savedData = tableRef.current.fetchData();
        setResultData([...savedData]);
    };

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
        setDataLoaded(false);
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="">
                    <Toast ref={toast} />

                    <Splitter style={{ height: '87vh' }} layout="vertical" gutterSize={10}>
                        <SplitterPanel size={35} minSize={35}>
                            <Splitter layout="horizontal" gutterSize={10}>
                                <SplitterPanel size={60} minSize={30} style={{ padding: '2px', position: 'relative' }}>
                                    <span className="p-float-label" style={{ minHeight: '100%' }}>
                                        <InputTextarea
                                            id="textarea"
                                            placeholder="Ex: SELECT * FROM users;"
                                            autoResize
                                            style={{ width: '100%', border: 'none', fontSize: '18px', minHeight: '100%', height: '100% !Important' }}
                                            rows={12}
                                            value={value}
                                            onChange={inputChangeHandler}
                                        />
                                        <label htmlFor="textarea">SQL Sketchpad</label>
                                        <span style={{ display: 'flex', gap: '4px', position: 'absolute', right: '14px', bottom: '16px', zIndex: '99' }}>
                                            <Button icon="pi pi-play" label="Run" loading={loading} onClick={onLoadingClick} className="p-button-raised" />
                                            {dataLoaded && <ConfirmOverlay code={value} saveQuery={saveQueryRef.current.saveQueryData} />}
                                        </span>
                                    </span>
                                </SplitterPanel>
                                <SplitterPanel size={30} minSize={20}>
                                    <ListMenuBox loadData={loadSavedData} ref={saveQueryRef} />
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                        <SplitterPanel size={70} minSize={20}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ padding: '10px 24px 0 18px', display: 'flex', justifyContent: 'space-between' }}>
                                    <h5>Query Result</h5>
                                    <span>
                                        <TableOverlay resultData={resultData} />
                                    </span>
                                </div>
                                <Table ref={tableRef} />
                            </div>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </div>
    );
};

export default Panel;
