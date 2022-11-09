import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import ReactTooltip from 'react-tooltip';
import DataTableVirtualScrollDemo from '../table';

const OverlayDemo = ({ resultData }) => {
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    return (
        <>
            <div className="grid">
                <Sidebar visible={visibleFullScreen} onHide={() => setVisibleFullScreen(false)} baseZIndex={1000} fullScreen>
                    <DataTableVirtualScrollDemo data={resultData} />
                </Sidebar>
                <div data-for="full-screen" data-tip="View Full Screen">
                    <Button type="button" icon="pi pi-th-large" className="p-button-rounded p-button-text" onClick={() => setVisibleFullScreen(true)} />
                </div>
                <ReactTooltip id="full-screen" />
            </div>
        </>
    );
};

export default OverlayDemo;
