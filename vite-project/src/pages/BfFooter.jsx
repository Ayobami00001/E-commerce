import React from 'react'

const BfFooter = () => {
  return (
    <>
    <div className='d-flex flex-column flex-fill flex-wrap justify-content-center align-content-center' style={{background:'#EdEFC8', }}>
        <div className='d-flex flex-column flex-fill justify-content-center align-items-center py-4'>
            <label htmlFor="Supporter" className='display-3 fw-bold ' style={{color:'#2a2539'}}>Supporter</label>
        </div>
        <div className='d-flex flex-wrap flex-fill justify-content-center align-items-center gap-4 mt-5'>
            <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'> 
                <span ><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1745874834/SCICT-staff-18-sqi-new-logo_dwvhlx.jpg" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875164/google_nym9o9.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875309/Interswitch_ruddey.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875376/Microsoft_logo_eia1hb.png" alt="" width={180} /></span>
            </div>
            <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center'>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875779/edozzier_a0uucm.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875721/Paystack_nuksyv.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875737/brewery_yev4pm.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875761/clan-logo_tcuwli.png" alt="" width={180} /></span>
            </div>
            <div className='d-flex flex-wrap gap-2 justify-content-center align-items-center mb-5'>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875794/moneymie_cn6uth.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875809/aella-credit_h5v5lk.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1745875848/Andela-log-landscape-blue-400px_ymsual.png" alt="" width={180} /></span>
                <span><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/e_background_removal/f_png/v1745876408/ChatGPT_Image_Apr_18_2025_09_11_28_PM_nd6q1l.png" alt="" width={180} /></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default BfFooter