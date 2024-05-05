import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import './AdminGallery.scss';
import imgOne from '../../assets/servicePage/gallery/1.png';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';
import imgFive from '../../assets/servicePage/gallery/5.png';
import imgSix from '../../assets/servicePage/gallery/6.png';

const AdminGallery = () => {
    const [galleryImages, setGalleryImages] = useState([
        imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix
    ]);

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedImages = [...galleryImages];
                updatedImages[index] = reader.result;
                setGalleryImages(updatedImages);
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
                        description="You can add, replace, or delete images from the gallery."
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
                <div className="gallery-container">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`gallery${index}`} />
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
                    ))}
                    {/* Placeholder elements for remaining slots */}
                    {Array.from({ length: 6 - galleryImages.length }).map((_, index) => (
                        <label key={index} htmlFor={`replace-upload-${index}`} className="gallery-item placeholder">
                            <span>Add Image</span>
                            <input
                                id={`replace-upload-${index}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, galleryImages.length + index)}
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
