import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { useRouter } from 'next/router';
import { Badge } from 'primereact/badge';

const panelMenuitems = [
    {
        label: 'All Queries',
        items: [
            {
                label: 'Query 1',
                icon: 'pi pi-fw pi-database'
            },
            {
                label: 'Query 2',
                icon: 'pi pi-fw pi-database'
            },
            {
                label: 'Query 3',
                icon: 'pi pi-fw pi-database'
            }
        ]
    }
];
const MenuDemo = ({ children }) => {
    const [menuItems, setMenuItems] = useState(panelMenuitems);
    // const addToMenu(obj) => {
    //     panelMenuitems.
    // }

    return (
        <div className="grid p-fluid">
            <div className="col-12" style={{ position: 'relative' }}>
                <Badge
                    value={menuItems[0]?.items?.length}
                    severity="success"
                    style={{
                        position: 'absolute',
                        top: '32px',
                        right: '17.5%',
                        zIndex: '9'
                    }}
                ></Badge>
                <PanelMenu model={menuItems} style={{ padding: '8px', boxShadow: 'none' }} />
            </div>
        </div>
    );
};

export default MenuDemo;
