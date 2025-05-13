import React from 'react'
import './Footer1.css'

const Footer1 = () => {
  return (
    <>
        <section className='ps-0  pt-2 pt-md-5 pb-5 justify-content-center align-content-center ' style={{backgroundColor:"#384A62" , color:"white"}}>
            <div className=' d-flex ms-0 ms-sm-0 ms-xl-5 align-content-center flex-wrap gap-5 ps-1  text-light pt-5 justify-content-center'>
                <div className='d-flex flex-column gap-3 ms-0 ms-xl-5 text-light'>
                    <h4>Printivo</h4>
                    
                    <li><a href="#" className='text-light'>About Us</a></li>
                    <li><a href="#" className='text-light'>Contact</a></li>
                    <li><a href="#" className='text-light'>Track Order</a></li>
                    <li><a href="#" className='text-light'>Printivo Promise</a></li>
                    <li><a href="#" className='text-light'>Printivo Blog</a></li>
                    <li><a href="#" className='text-light'>Career</a></li>
                    
                </div>
                <div className='d-flex flex-column gap-3 ms-0 ms-xl-5'>
                    <h4>Help and Information</h4>
                    
                    <li><a href="#" className='text-light'>Paper Quality</a></li>
                    <li><a href="#" className='text-light'>Privacy Policy</a></li>
                    <li><a href="#" className='text-light'>Terms and Conditions</a></li>
                    <li><a href="#" className='text-light'>Font Licenses</a></li>
                    <li><a href="#" className='text-light'>Shipping and Delivery</a></li>
                    
                </div>
                <div className='d-flex flex-column gap-3 ms-0 ms-xl-5'>
                    <h4>Make Money</h4>
                    
                    <li><a href="#" className='text-light'>Refer a friend & earn N1,000</a></li>
                    <li><a href="#" className='text-light'>Become a Reseller</a></li>
                    <li><a href="#" className='text-light'>Sell your Designs</a></li>
                    <li><a href="#" className='text-light'>Merch Store</a></li>
                    
                </div>
                <div className='d-flex flex-column gap-3 ms-0 ms-xl-5'>
                    <h4>Follow Us</h4>
                    <div className='d-flex gap-3'>
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745927218/download_wt9q2k.svg" alt="" />
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745927665/download_ienwfd.svg" alt="" />
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745928193/download_gisv35.svg" alt="" />
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745928419/download_nlb0bl.svg" alt="" />
                    </div>
                    <h4>Accepted Payments</h4>
                    <div>
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746282452/payment_m9zug4.png" alt="" width={270} />
                    </div>
                    <h4>Delivery</h4>
                    <div>
                        <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746282590/shipping_lvqlhf.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer1