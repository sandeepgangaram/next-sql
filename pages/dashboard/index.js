import React from 'react';
import ChartDemo from '../uikit/charts';

const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Total Queries</span>
                            <div className="text-900 font-medium text-xl">192</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-database text-blue-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">115 </span>
                    <span className="text-500">in last 3 months</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Tickets</span>
                            <div className="text-900 font-medium text-xl">35</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-ticket text-orange-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">12+ </span>
                    <span className="text-500">since last month</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Downloads</span>
                            <div className="text-900 font-medium text-xl">143</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-file text-cyan-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">94 </span>
                    <span className="text-500">new downloads </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Collaborations</span>
                            <div className="text-900 font-medium text-xl">25</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-users text-purple-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">10 </span>
                    <span className="text-500">Active</span>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Activity Overview</h5>
                    <ChartDemo />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
