import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DashboardNavbar = () => {
    const [userData, setUserData] = useState({ name: '', profileImage: '' });

    useEffect(() => {
        const usermail = localStorage.getItem("userEmail");
        if (!usermail) return;

        axios.get(`http://localhost:2003/user/${usermail}`)
            .then(res => {
                if (res.data.status === "success") {
                    setUserData(res.data.user);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profileImage', file);

    const usermail = localStorage.getItem("userEmail");
    try {
        const res = await axios.post(`http://localhost:2003/user/upload/${usermail}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (res.data.status === "success") {
            setUserData(prev => ({ ...prev, profileImage: res.data.profileImage }));
        }
    } catch (err) {
        alert("Upload failed");
    }
};

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>


                <div>
                    <a href="#"><span className='fs-4' style={{color:'#373243' }}><img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1746537927/cart_loqnw4.svg" alt="" />cart</span></a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#scrollspyHeading1" style={{color:'#373243' }} >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2" style={{color:'#373243' }}>Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3" style={{color:'#373243' }}>Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading4" style={{color:'#373243' }}>Contact Us</a>
                        </li>
                    </ul>
                <div className='d-flex align-items-center gap-3 justify-content-around'>
                    <div className="d-flex align-items-center">
    <label htmlFor="profile-upload" style={{ cursor: 'pointer', marginRight: '10px' }}>
        {userData.profileImage ? (
            <img
                src={userData.profileImage ? `http://localhost:2003${userData.profileImage}` : defaultImage}
                alt="Profile"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
            />
        ) : (
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#555',
            }}></div>
        )}
        <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
        />
    </label>
    <span>{userData.name}</span>
</div>
        <div className='d-flex gap-3'>
            <button className=' rounded ' style={{background:'#bdd3cc' }}>Seller</button>
        </div>

                </div>

                </div>
            </div>
        </nav>
    );
}

export default DashboardNavbar;
