import React, { useState } from 'react';
import './Admin.scss';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Admin = () => {

    const [aboutDetails, setAboutDetails] = useState({
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        phoneNumber: '123-456-7890',
        emailAddress: 'info@example.com',
        address: '123 Main Street, City, Country',
        facebookLink: 'https://www.facebook.com/example'
    });


    const [facultyMembers, setFacultyMembers] = useState([
        { id: 1, name: 'Dianne Russell', position: 'Principal', picture: '' },
        { id: 2, name: 'Esther Howard', position: 'Teacher', picture: '' },
        { id: 3, name: 'Darrell Steward', position: 'Teacher', picture: '' },
        { id: 4, name: 'Jenny Wilson', position: 'Teacher', picture: '' }
    ]);

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

    const handleAddFaculty = () => {
        const newId = facultyMembers.length + 1;
        setFacultyMembers([...facultyMembers, { id: newId, name: '', position: '', picture: '' }]);
    };

    const handleDeleteFaculty = (id) => {
        const filteredFaculty = facultyMembers.filter(member => member.id !== id);
        setFacultyMembers(filteredFaculty);
    };

    const handleSaveAboutDetails = () => {
        console.log("About details saved:", aboutDetails);
    };

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
                        <form>
                            <div className="about-form">
                                <div className="about-column">
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber" value={aboutDetails.phoneNumber} onChange={handleChangeAbout} />
                                    <label htmlFor="emailAddress">Email Address:</label>
                                    <input type="text" id="emailAddress" name="emailAddress" value={aboutDetails.emailAddress} onChange={handleChangeAbout} />
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" value={aboutDetails.address} onChange={handleChangeAbout} />
                                    <label htmlFor="facebookLink">Facebook Link:</label>
                                    <input type="text" id="facebookLink" name="facebookLink" value={aboutDetails.facebookLink} onChange={handleChangeAbout} />
                                </div>
                                <div className="about-column">
                                    <label htmlFor="description">Description:</label>
                                    <textarea id="description" name="description" value={aboutDetails.description} onChange={handleChangeAbout} rows="5" />
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
                            <button className="add-member-btn" >Save</button>
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
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>
                                        <input type="text" value={member.name} onChange={(e) => handleChangeFaculty(member.id, 'name', e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="text" value={member.position} onChange={(e) => handleChangeFaculty(member.id, 'position', e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="file" accept="image/*" onChange={(e) => handleChangeFaculty(member.id, 'picture', e.target.files[0])} />
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