import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import './AdminGallery.scss';
import imgOne from '../../assets/lks/13.jpg';
import imgTwo from '../../assets/lks/14.jpg';
import imgThree from '../../assets/lks/15.jpg';
import imgFour from '../../assets/lks/16.jpg';
import imgFive from '../../assets/lks/17.jpg';
import imgSix from '../../assets/lks/18.jpg';
import axios from 'axios';

const AdminGallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {

        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            if (!token) {
                window.location.href = '/'; // Redirect to login page if token is not found
            }
    
        fetchPhotoLinks();
    }, []);


    const fetchPhotoLinks = async () => {
        try {
            const response = await axios.get('https://lks-server.onrender.com/get/photo');

            const links = response.data; // Assuming the response has a field 'photoLinks' containing the array of image links

            setGalleryImages(links || []); // Set to an empty array if links is undefined
        } catch (error) {
            console.error('Error fetching photo links:', error);
        }
    };


    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const imageData = new FormData();
                imageData.append('file', file);
                imageData.append('upload_preset', 'marketplace_preset'); // Replace 'your_upload_preset' with your Cloudinary upload preset

                try {5
                    const response = await axios.post(
                        'https://api.cloudinary.com/v1_1/ddttcgieo/image/upload',
                        imageData
                    );
                    const imageUrl = response.data.secure_url;

                    // Update galleryImages state with the Cloudinary image URL
                    const updatedImages = [...galleryImages];
                    updatedImages[index] = imageUrl;
                    setGalleryImages(updatedImages);

                    // Send a POST request to save the image link
                    await axios.post('https://lks-server.onrender.com/upload/photo', {
                        link: imageUrl,
                    });

                    console.log('Image uploaded and link saved successfully');
                } catch (error) {
                    console.error('Error uploading image to Cloudinary or saving link:', error);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const deleteImage = (index) => {
        const updatedImages = [...galleryImages];
        updatedImages.splice(index, 1);
        setGalleryImages(updatedImages);
    };

    const handleSaveChanges = () => {
        // Handle saving changes here
    };

    return (
        <>
            <AdminNavbar />
            
            <div className="admin">
                <div className="admin-header">
                    <SectionTitle
                        subTitle="Admin Gallery"
                        title="Manage Gallery Images"
                        description="ADD, REPLACE, and DELETE images from the gallery."
                    />
                    <div className="button-container">
                        <button className="upload-button" onClick={handleSaveChanges}>Save Changes</button>
                        <div className="upload-container">
                            <label htmlFor="file-upload" className="upload-button">Upload Image</label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, galleryImages.length)}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="gallery-container section-bg section-common">
                {galleryImages && galleryImages.length > 0 ? (
                    galleryImages.map((image, index) => (
                        <div key={image._id} className="gallery-item">
                            <img src={image.link} alt={`gallery${index}`} />
                            <div className="button-container">
                                <input
                                    id={`replace-upload-${index}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, index)}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor={`replace-upload-${index}`} className="replace-button">Replace</label>
                                <button onClick={() => deleteImage(index)}>Delete</button>
                            </div>
                        </div>
                            ))
                        ) : (
                            <p>No images to display</p>
                    )}

                    {/* Placeholder elements for remaining slots */}
                    {Array.from({ length: 6 - (galleryImages ? galleryImages.length : 0) }).map((_, index) => (
                        <label key={index} htmlFor={`replace-upload-${index}`} className="gallery-item placeholder">
                            <span>Add Image</span>
                            <input
                                id={`replace-upload-${index}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, galleryImages ? galleryImages.length + index : index)}
                                style={{ display: 'none' }}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminGallery;
