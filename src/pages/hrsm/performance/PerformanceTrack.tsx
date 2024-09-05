import React, { useState } from 'react';
import { FaTrophy, FaTasks, FaClock, FaChartLine } from 'react-icons/fa';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

const PerformanceTrack: React.FC = () => {
    const [showMetrics, setShowMetrics] = useState(false);

    const performanceData = {
        totalTasks: 120,
        completedTasks: 95,
        inProgressTasks: 15,
        overdueTasks: 10,
        avgCompletionTime: '2.5 hrs',
        overallPerformance: 88, 
        metrics: [
            { name: 'Efficiency', value: 85 },
            { name: 'Quality', value: 90 },
            { name: 'Timeliness', value: 80 },
            { name: 'Engagement', value: 92 },
        ]
    };

    const toggleView = () => setShowMetrics(prevShowMetrics => !prevShowMetrics);

    return (
        <MasterComponent page="hrsm">
            <TitleComponent title="HRSM" subtitle="Performance Tracking" />
            <div className="container mt-4">

                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-primary" onClick={toggleView}>
                        {showMetrics ? "Show Overview" : "Show Metrics & Breakdown"}
                    </button>
                </div>

                {!showMetrics ? (
                    <div>
                        <div className="row text-center">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <FaTrophy size={40} className="text-warning" />
                                        <h5 className="card-title mt-3">Overall Performance</h5>
                                        <p className="display-4 fw-bold">{performanceData.overallPerformance}%</p>
                                        <small className="text-muted">Excellent Performance</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <FaTasks size={40} className="text-primary" />
                                        <h5 className="card-title mt-3">Completed Tasks</h5>
                                        <p className="display-4 fw-bold">{performanceData.completedTasks}</p>
                                        <small className="text-muted">Out of {performanceData.totalTasks} tasks</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <FaClock size={40} className="text-success" />
                                        <h5 className="card-title mt-3">Avg. Completion Time</h5>
                                        <p className="display-4 fw-bold">{performanceData.avgCompletionTime}</p>
                                        <small className="text-muted">Per task</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <FaChartLine size={40} className="text-danger" />
                                        <h5 className="card-title mt-3">Overdue Tasks</h5>
                                        <p className="display-4 fw-bold">{performanceData.overdueTasks}</p>
                                        <small className="text-muted">Needs attention</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Task Breakdown</h5>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Total Tasks
                                                <span className="badge bg-primary rounded-pill">{performanceData.totalTasks}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Completed Tasks
                                                <span className="badge bg-success rounded-pill">{performanceData.completedTasks}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                In Progress Tasks
                                                <span className="badge bg-warning rounded-pill">{performanceData.inProgressTasks}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Overdue Tasks
                                                <span className="badge bg-danger rounded-pill">{performanceData.overdueTasks}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Insights</h5>
                                        <p className="card-text">Based on the current performance metrics, you are on track to complete all tasks ahead of schedule. Keep up the good work to maintain quality and efficiency.</p>
                                        <p className="card-text">Consider focusing more on overdue tasks to improve timeliness and minimize delays.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Key Performance Metrics</h4>
                                    <div className="row">
                                        {performanceData.metrics.map((metric, index) => (
                                            <div key={index} className="col-md-3 col-sm-6 mb-4">
                                                <h5>{metric.name}</h5>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{ width: `${metric.value}%` }}
                                                        aria-valuenow={metric.value}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        {metric.value}%
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MasterComponent>
    );
};

export default PerformanceTrack;
