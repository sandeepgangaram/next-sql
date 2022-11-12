import getConfig from 'next/config';
import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { useState, useEffect, forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import { LayoutContext } from '../../context/layoutcontext';

const AppTopbar = forwardRef((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    console.log(contextPath);
    useEffect(() => {
        setShowTooltip(true);
    }, []);

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
                        <img src={`${contextPath}/images/logo.png`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
                        <span>NeXTSQL</span>
                    </>
                </a>
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle} style={{ marginTop: '4px' }}>
                <i className="pi pi-bars" />
            </button>

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
                        {showTooltip && <ReactTooltip id="profile" place="left" />}
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
                        {showTooltip && <ReactTooltip id="settings" place="left" />}
                    </a>
                </Link>
            </div>
        </div>
    );
});

export default AppTopbar;
