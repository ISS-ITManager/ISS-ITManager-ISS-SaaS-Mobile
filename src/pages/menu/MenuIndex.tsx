import React, {useState} from 'react'
import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent'
import Image from '../../components/constants/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MenuModal from './MenuModal';

const MenuIndex = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <MasterComponent>
            <TitleComponent title={"Menu"} />
            <div className="row mb-3">
                <div className="col-12">
                <div className="input-group input-group-merge rounded-pill">
                    <span id="basic-icon-default-fullname2" className="input-group-text"><i className='bx bx-search-alt' ></i></span>
                    <input type="text" className="form-control form-control-lg"
                    id="basic-icon-default-fullname" placeholder="Search Menu here..." aria-label="John Doe" aria-describedby="basic-icon-default-fullname2">
                    
                    </input>
                </div>
                </div>
            </div>
            <div className=' animate__animated animate__bounceInLeft mb-3'>
                <h6 className=''>Categories</h6>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide style={{ width: '20%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                    <i className="fi fi-rr-french-fries"></i>
                                </span>
                            </div>
                            <small>Appetizer</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '18%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                    <i className="fi fi-rr-drumstick"></i>
                                </span>
                            </div>
                            <small>Meal</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '18%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                <i className="fi fi-rr-candy-bar"></i>
                                </span>
                            </div>
                            <small>Desserts</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '18%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                <i className="fi fi-rr-popcorn"></i>
                                </span>
                            </div>
                            <small>Snacks</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '18%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                <i className="fi fi-rr-drink-alt"></i>
                                </span>
                            </div>
                            <small>Drinks</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '18%' }}>
                        <div className='text-center'>
                            <div className="avatar avatar-xl me-2">
                                <span className="avatar-initial rounded-circle text-center bg-label-primary">
                                <i className="fi fi-rr-bread"></i>
                                </span>
                            </div>
                            <small>Bread</small>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <br />
            </div>
            <div className='mb-3 animate__animated animate__bounceInRight'>
                <h6 className=''>Featured</h6>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide style={{ width: '85%' }}>
                        <div className="card"  onClick={openModal}>
                            <div className="card-body p-0">
                                <div className="row">
                                <div className="col-5">
                                    <img src="https://onedishkitchen.com/wp-content/uploads/2020/04/pasta-carbonara-one-dish-kitchen-fi-enhanced.png" className='rounded' alt="" />
                                </div>
                                <div className="col-7 p-2 mb-auto mt-auto">
                                        <b className='text-dark'>Carbonara</b> <br />
                                        <span className='mb-3'>Best Seller</span> <br /> <br />
                                        <span className='h4 fw-bold text-primary'>
                                            QR 13
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '85%' }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row">
                                <div className="col-5">
                                        <img src="https://www.recipetineats.com/tachyon/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg" className='rounded' alt="" />
                                </div>
                                <div className="col-7 p-2 mb-auto mt-auto">
                                        <b className='text-dark'>Chicken Shawarma</b> <br />
                                        <span className='mb-3'>Best Seller</span> <br /> <br />
                                        <span className='h4 fw-bold text-primary'>
                                            QR 10
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide style={{ width: '85%' }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row">
                                <div className="col-5">
                                        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x500.png" className='rounded' alt="" />
                                </div>
                                <div className="col-7 p-2 mb-auto mt-auto">
                                        <b className='text-dark'>French Vanilla</b> <br />
                                        <span className='mb-3'>Best Seller</span> <br /> <br />
                                        <span className='h4 fw-bold text-primary'>
                                            QR 7
                                        </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div  className=' animate__animated animate__bounceInUp row'>
                <div className="col-12">
                    <h6 className=''>Order Now</h6>
                </div>
                <div className="col-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body p-0">
                            <img src="https://www.bunsinmyoven.com/wp-content/uploads/2023/09/thumb-4-500x500.jpg" className='rounded-top' alt="" />
                        </div>
                        <div className="card-footer p-3">
                            <span>Fries</span> <br />
                            <span className='badge bg-label-primary fw-bold'>
                                QR 5.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body p-0">
                            <img src="https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" className='rounded-top' alt="" />
                        </div>
                        <div className="card-footer p-3">
                            <span>Fried Chicken</span> <br />
                            <span className='badge bg-label-primary fw-bold'>
                                QR 10.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body p-0">
                            <img src="https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg" className='rounded-top' alt="" />
                        </div>
                        <div className="card-footer p-3">
                            <span>Oreo Cheesecake</span> <br />
                            <span className='badge bg-label-primary fw-bold'>
                                QR 15.00
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="card h-100">
                        <div className="card-body p-0">
                            <img src="https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/06croissantsrex1-square640.jpg" className='rounded-top' alt="" />
                        </div>
                        <div className="card-footer p-3">
                            <span>Croissant</span> <br />
                            <span className='badge bg-label-primary fw-bold'>
                                QR 5.00
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <MenuModal isOpen={isModalOpen} onClose={closeModal} />
        </MasterComponent>
    )
}

export default MenuIndex
