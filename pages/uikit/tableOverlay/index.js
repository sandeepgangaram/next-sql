import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import DataTableVirtualScrollDemo from '../table';

const OverlayDemo = ({ resultData }) => {
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    return (
        <>
            <div className="grid">
                <Sidebar visible={visibleFullScreen} onHide={() => setVisibleFullScreen(false)} baseZIndex={1000} fullScreen>
                    <DataTableVirtualScrollDemo data={resultData} />
                </Sidebar>
                <Button type="button" icon="pi pi-th-large" label="Full Screen" className="p-button-rounded p-button-text" onClick={() => setVisibleFullScreen(true)} />
            </div>
        </>
    );
};

export default OverlayDemo;
