import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from '../../context/menucontext';

const AppMenu = () => {
    const model = [
        {
            label: 'SQL Workspace',
            items: [{ label: 'SQL Workspace', icon: 'pi pi-fw pi-database', to: '/' }]
        },
        {
            label: 'Account',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-tablet', to: '/dashboard' }]
        },
        {
            label: 'Documentation',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'NeXTSQL v2.0',
                    icon: 'pi pi-fw pi-compass',
                    to: '/pages/notfound'
                },
                {
                    label: 'Learn SQL',
                    icon: 'pi pi-fw pi-pencil',
                    to: '/pages/notfound'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
