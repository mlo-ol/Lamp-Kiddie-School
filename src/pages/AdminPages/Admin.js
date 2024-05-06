import React, { useState, useEffect } from 'react';
import './Admin.scss';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import axios from 'axios';


const cloudinaryCloudName = 'ddttcgieo'
const uploadPreset = 'marketplace_preset'



const Admin = () => {
    const [aboutDetails, setAboutDetails] = useState('');
    const [facultyMembers, setFacultyMembers] = useState ([]);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (!token) {
            window.location.href = '/'; // Redirect to login page if token is not found
        }

       getInfo();
       fetchFaculty();
    }, []);


    const getInfo = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getAbout');
            const { About } = res.data; // Extract the About object from the response
            setAboutDetails({
                ...About, // Spread the About object directly into setAboutDetails
            });
            console.log('About details fetched:', aboutDetails);
        } catch(error) {
            console.error('Error fetching about details:', error);
        }
    }

    const fetchFaculty = async () => {
        try {
            const response = await axios.get('https://lks-server.onrender.com/get/faculty');
            setFacultyMembers(response.data.allFaculty);
        } catch (error) {
            console.error('Error fetching faculty:', error);
        }
    };
    

    const handleSubmitAbout = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            // Send PUT request to update about details
            await axios.put(`https://lks-server.onrender.com/edit/about/${aboutDetails._id}`, aboutDetails);
            console.log('About details updated:', aboutDetails);
        } catch (error) {
            console.error('Error updating about details:', error);
        }
    };


    const handleChangeAbout = (e) => {
        const { name, value } = e.target;
        setAboutDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeFaculty = (id, key, value) => {
        const updatedFaculty = facultyMembers.map(member => {
            if (member.id === id) {
                return { ...member, [key]: value };
            }
            return member;
        });
        setFacultyMembers(updatedFaculty);
    };

    const handleFileChange = async (id, file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);


        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
                formData
            );
            const imageUrl = response.data.secure_url;

            handleChangeFaculty(id, 'picture', imageUrl);

            // Send PUT request to update faculty with the new image URL
            await axios.put(`https://lks-server.onrender.com/edit/faculty/${id}`, {
                image: imageUrl,
            });

        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
        }

    }

    const handleAddFaculty = () => {
        const newId = facultyMembers.length + 1;
        setFacultyMembers([...facultyMembers, { id: newId, name: '', position: '', picture: '' }]);
    };

    const handleDeleteFaculty = (id) => {
        const filteredFaculty = facultyMembers.filter(member => member.id !== id);
        setFacultyMembers(filteredFaculty);
    };

    const handleSaveAboutDetails = async () => {
        try {
            const response = await fetch(`https://lks-server.onrender.com/edit/about/${aboutDetails._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: aboutDetails.phoneNumber,
                    email: aboutDetails.email,
                    address: aboutDetails.address,
                    facebook: aboutDetails.facebook,
                    schoolDescription: aboutDetails.schoolDescription,
                }),
            });
            if (response.ok) {
                // Handle successful response
                console.log('About details updated successfully!');
            } else {
                // Handle error response
                console.error('Failed to update about details:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating about details:', error);
        }
    };

    const handleSaveFaculty = async () => {
        try {
            const saveRequests = facultyMembers.map(async member => {
                await axios.put(`https://lks-server.onrender.com/edit/faculty/${member._id}`, {
                    name: member.name,
                    title: member.title,
                    image: member.image,
                });
            });

            await Promise.all(saveRequests);

            // Optionally, you can fetch updated data after saving
            // Example: fetchFacultyMembers();

            console.log('Faculty members saved successfully');
        } catch (error) {
            console.error('Error saving faculty members:', error);
        }
    }
    

    return (
        <>
            <AdminNavbar />
            <div className="admin-container">
                <div className="admin-section section-bg section-common">
                    <div className="about-details-header">
                        <SectionTitle subTitle="Admin About" title="Edit About Details" />
                        <button className="save-btn" onClick={handleSaveAboutDetails}>Save</button>
                    </div>
                    <div className="about-details-container">
                        <form onSubmit={handleSubmitAbout}>
                            <div className="about-form">
                                <div className="about-column">
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber" value={aboutDetails.phoneNumber} onChange={handleChangeAbout} />
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="text" id="email" name="email" value={aboutDetails.email} onChange={handleChangeAbout} />
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" value={aboutDetails.address} onChange={handleChangeAbout} />
                                    <label htmlFor="facebook">Facebook Link:</label>
                                    <input type="text" id="facebook" name="facebook" value={aboutDetails.facebook} onChange={handleChangeAbout} />
                                </div>
                                <div className="about-column">
                                    <label htmlFor="schoolDescription">Description:</label>
                                    <textarea id="schoolDescription" name="schoolDescription" value={aboutDetails.schoolDescription} onChange={handleChangeAbout} rows="5" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="admin-section section-bg section-common">
                    <div className="faculty-title">
                        <SectionTitle subTitle="Admin About" title="Manage Faculty Members" />
                        <div className="button-container">
                            <button className="add-member-btn" onClick={handleAddFaculty}>Add</button>
                            <button className="add-member-btn" onClick={handleSaveFaculty} >Save</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Picture</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facultyMembers.map(member => (
                                <tr key={member._id}>
                                    <td>{member.id}</td>
                                    {/* _id is too long  */}
                                    <td>
                                        <input type="text" value={member.name} onChange={(e) => handleChangeFaculty(member._id, 'name', e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="text" value={member.title} onChange={(e) => handleChangeFaculty(member._id, 'position', e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="file" accept="image/*" onChange={(e) => handleFileChange(member._id, e.target.files[0])} />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteFaculty(member.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Admin;