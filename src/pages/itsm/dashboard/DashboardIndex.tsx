import React from 'react';
import ApexCharts from 'react-apexcharts';
import { FaUsers, FaHeartbeat, FaTicketAlt, FaCheckCircle } from 'react-icons/fa';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

const Dashboard = () => {
    const overviewData = {
        totalUsers: 1200,
        activeUsers: 980,
        systemHealth: 'Good',
        openTickets: 25
    };

    const performanceOptions = {
        chart: {
            type: 'line',
            height: 350
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'System Performance',
            align: 'left'
        },
        fill: {
            opacity: 0.3
        },
        colors: ['#007bff']
    };

    const performanceSeries = [{
        name: 'Performance',
        data: [70, 80, 85, 90, 95, 100]
    }];

    const incidentsOptions = {
        chart: {
            type: 'donut',
            height: 350
        },
        labels: ['Critical', 'High', 'Medium', 'Low'],
        title: {
            text: 'Incident Distribution',
            align: 'left'
        },
        colors: ['#dc3545', '#ffc107', '#17a2b8', '#28a745']
    };

    const incidentsSeries = [5, 12, 20, 35];

    const systemHealthOptions = {
        chart: {
            type: 'donut',
            height: 350
        },
        labels: ['Server Uptime', 'Network Uptime', 'Application Uptime'],
        title: {
            text: 'System Health Metrics',
            align: 'left'
        },
        colors: ['#007bff', '#28a745', '#ffc107']
    };

    const systemHealthSeries = [99, 98, 95];

    return (
        <MasterComponent page='dashboard'>
            <TitleComponent title="IT Management Dashboard" />
            <div className="container mt-4">
                {/* Overview Metrics */}
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card overview-card w-100" style={{ backgroundColor: '#f0f8ff' }}>
                                    <div className="card-body text-center">
                                        <FaUsers size={40} color="#007bff" />
                                        <h5 className="card-title mt-3">Total Users</h5>
                                        <p className="card-text display-4 font-weight-bold">{overviewData.totalUsers}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card overview-card w-100" style={{ backgroundColor: '#e6f7ff' }}>
                                    <div className="card-body text-center">
                                        <FaCheckCircle size={40} color="#28a745" />
                                        <h5 className="card-title mt-3">Active Users</h5>
                                        <p className="card-text display-4 font-weight-bold">{overviewData.activeUsers}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card overview-card w-100" style={{ backgroundColor: '#fff3e6' }}>
                                    <div className="card-body text-center">
                                        <FaHeartbeat size={40} color="#ffcc00" />
                                        <h5 className="card-title mt-3">System Health</h5>
                                        <p className="card-text display-4 font-weight-bold">{overviewData.systemHealth}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card overview-card w-100" style={{ backgroundColor: '#ffe6e6' }}>
                                    <div className="card-body text-center">
                                        <FaTicketAlt size={40} color="#dc3545" />
                                        <h5 className="card-title mt-3">Open Tickets</h5>
                                        <p className="card-text display-4 font-weight-bold">{overviewData.openTickets}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="mb-4">System Performance</h4>
                        <ApexCharts options={performanceOptions} series={performanceSeries} type="line" height={350} />
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4">Incident Distribution</h4>
                        <ApexCharts options={incidentsOptions} series={incidentsSeries} type="donut" height={350} />
                    </div>
                </div>

                {/* System Health Data */}
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-4">System Health Metrics</h4>
                        <div className="card mb-4">
                            <div className="card-body">
                                <ApexCharts options={systemHealthOptions} series={systemHealthSeries} type="donut" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterComponent>
    );
};

export default Dashboard;
