import React, { useCallback, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AdminTestimonials.scss';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import axios from 'axios';

const AdminTestimonials = () => {
    const [pendingTestimonials, setPendingTestimonials] = useState([]);
    const [approvedTestimonials, setApprovedTestimonials] = useState([]);



    const fetchPendingTestimonials = useCallback(async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getPendingTestimonials')

            const pending = res.data.testimonials.map(testimonial => ({
                id: testimonial._id,
                name: testimonial.name,
                applicantType: testimonial.applicantType,
                email: testimonial.email,
                contact: testimonial.contactNumber,
                message: testimonial.text,
            })); 

            setPendingTestimonials(pending)

        } catch(error){
            console.error(error);
        }
    }, []);

    const fetchApprovedTestimonials = useCallback(async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getApprovedTestimonials')
            
            const approved = res.data.testimonials.map(testimonial => ({
                id: testimonial._id,
                name: testimonial.name,
                applicantType: testimonial.applicantType,
                email: testimonial.email,
                contact: testimonial.contactNumber,
                message: testimonial.text,
            }));

            setApprovedTestimonials(approved)

        } catch(error){
            console.error(error);
        }
    }, []);
    

    const handleApprove = async (id) => {
        try {
            const res = await axios.put(`https://lks-server.onrender.com/updateTestimonialStatus/${id}/Approved`)
            console.log(res);
            refreshTestimonials();
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemove = async (id) => {
        try {
            const res = await axios.put(`https://lks-server.onrender.com/updateTestimonialStatus/${id}/Removed`)
            console.log(res);
            refreshTestimonials();
        } catch (error) {
            console.error(error);
        }
    };

    const refreshTestimonials = useCallback(async () => {
        await fetchPendingTestimonials();
        await fetchApprovedTestimonials();
    }, [fetchPendingTestimonials, fetchApprovedTestimonials]);


    useEffect(() => {
        
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (!token) {
            window.location.href = '/'; // Redirect to login page if token is not found
        }


        refreshTestimonials();
    }, [refreshTestimonials])



    return (
        <>
            <AdminNavbar />
            <div className="admin-testimonials">
                <SectionTitle
                    subTitle="Admin Testimonials"
                    title="Manage Testimonials"
                    description="APPROVE or REMOVE Testimonials."
                />
                <div className="testimonials-table section-bg section-common">
                    <h2>Pending Testimonials</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Email Address</th>
                                <th>Contact Number</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingTestimonials.map(testimonial => (
                                <tr key={testimonial.id}>
                                    <td>{testimonial._id}</td>
                                    <td>{testimonial.name}</td>
                                    <td>{testimonial.applicantType}</td>
                                    <td>{testimonial.email}</td>
                                    <td>{testimonial.contact}</td>
                                    <td>{testimonial.message}</td>
                                    <td>
                                        <button className="approve-button" onClick={() => handleApprove(testimonial.id)}>Approve</button>
                                        <button className="remove-button" onClick={() => handleRemove(testimonial.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="testimonials-table section-bg section-common">
                    <h2>Approved Testimonials</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Email Address</th>
                                <th>Contact Number</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedTestimonials.map(testimonial => (
                                <tr key={testimonial.id}>
                                    <td>{testimonial._id}</td>
                                    <td>{testimonial.name}</td>
                                    <td>{testimonial.applicantType}</td>
                                    <td>{testimonial.email}</td>
                                    <td>{testimonial.contact}</td>
                                    <td>{testimonial.message}</td>
                                    <td>
                                        <button className="remove-button" onClick={() => handleRemove(testimonial.id)}>Remove</button>
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

export default AdminTestimonials;
