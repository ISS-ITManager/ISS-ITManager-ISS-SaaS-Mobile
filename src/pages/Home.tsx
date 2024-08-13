import React from 'react'
import MasterComponent from '../components/layouts/MasterComponent'
import TitleComponent from '../components/layouts/TitleComponent'
import Image from '../components/constants/Image'

const Home = () => {
    return (
        <MasterComponent>
            <TitleComponent title={"Wallet"} />
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="mb-3 col-10">
                            <span className='text-dark fw-bold h1'> QR 160.00</span><br />
                            <small>Wallet Balance</small>
                        </div>
                        <div className="mb-3 col-2">
                            <i className='bx bx-low-vision text-dark fw-bold' ></i>
                        </div>
                        <div className="col-6 text-center">
                            <button className='btn btn-primary w-100 rounded-pill'>
                                <i className='bx bx-credit-card me-2' ></i> Cash In
                            </button>
                        </div>
                        <div className="col-6 text-center">
                            <button className='btn btn-label-primary w-100 rounded-pill'>
                                <i className='bx bx-qr me-2' ></i>QR CODE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header">
                    <b>Recent Transactions</b>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-timeline">
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                Payment<br/><small>July 20, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end text-muted h6 mt-n2'>
                               - QR 23.00
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                Payment<br/><small>July 16, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end text-muted h6 mt-n2'>
                              - QR 10.00
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                Cash In<br/><small>July 07, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end text-primary h6 mt-n2'>
                               +QR 100.00
                            </span>
                        </li>
                        
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                Payment<br/><small>July 03, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end text-muted h6 mt-n2'>
                              - QR 16.00
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                Cash In<br/><small>July 07, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end text-primary h6 mt-n2'>
                               +QR 100.00
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </MasterComponent>
    )
}

export default Home
