import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { useState, forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { ToggleButton } from 'primereact/togglebutton';
import ReactTooltip from 'react-tooltip';

const AppTopbar = forwardRef((props, ref) => {
    const [checked, setChecked] = useState(false);
    const { setLayoutConfig, setLayoutState, layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    const changeTheme = (theme, colorScheme) => {
        const themeLink = document.getElementById('theme-css');
        const themeHref = themeLink ? themeLink.getAttribute('href') : null;
        const newHref = themeHref ? themeHref.replace(layoutConfig.theme, theme) : null;

        replaceLink(themeLink, newHref, () => {
            setLayoutConfig((prevState) => ({ ...prevState, theme, colorScheme }));
        });
    };
    const replaceLink = (linkElement, href, onComplete) => {
        if (!linkElement || !href) {
            return;
        }

        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();

            const element = document.getElementById(id); // re-check
            element && element.remove();

            cloneLinkElement.setAttribute('id', id);
            onComplete && onComplete();
        });
    };
    const toggleHandler = (e) => {
        e.value ? changeTheme('lara-dark-indigo', 'dark') : changeTheme('lara-light-indigo', 'light');
        setChecked(e.value);
    };

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            <Link href="/">
                <a className="layout-topbar-logo" style={{ width: 'auto' }}>
                    <>
                        <span>NeXTSQL</span>
                    </>
                </a>
            </Link>

            <div data-for="toggle-menu" data-tip="Toggle Menu">
                <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle} style={{ marginTop: '4px' }}>
                    <i className="pi pi-bars" />
                </button>
            </div>
            <ReactTooltip id="toggle-menu" />

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href="/profile">
                    <a>
                        <div data-for="profile" data-tip="My Profile">
                            <button type="button" className="p-link layout-topbar-button">
                                <i className="pi pi-user"></i>
                                <span>Profile</span>
                            </button>
                        </div>
                        <ReactTooltip id="profile" />
                    </a>
                </Link>

                <Link href="/settings">
                    <a>
                        <div data-for="settings" data-tip="Settings">
                            <button type="button" className="p-link layout-topbar-button">
                                <i className="pi pi-cog"></i>
                                <span>Settings</span>
                            </button>
                        </div>
                        <ReactTooltip id="settings" />
                    </a>
                </Link>
                {/* <InputSwitch checked={layoutConfig.ripple} onChange={(e) => changeRipple(e)}>
                    okoko
                </InputSwitch> */}
                <ToggleButton onLabel="Light" offLabel="Dark" onIcon="pi pi-sun" offIcon="pi pi-moon" checked={checked} onChange={toggleHandler} />
            </div>
        </div>
    );
});

export default AppTopbar;
