import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AdminTestimonials.scss';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import axios from 'axios';

const AdminTestimonials = () => {
    const [pendingTestimonials, setPendingTestimonials] = useState([]);
    const [approvedTestimonials, setApprovedTestimonials] = useState([]);

    useEffect(() => {
        fetchPendingTestimonials();
        fetchApprovedTestimonials();
    }, [])

    const fetchPendingTestimonials = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getPendingTestimonials')
            console.log(res.data.testimonials);
            

            const testimonials = res.data.testimonials.map(testimonial => ({
                name: testimonial.name,
                applicantType: testimonial.applicantType,
                email: testimonial.email,
                contact: testimonial.contactNumber,
                message: testimonial.text,
            })); // Create array of testimonial objects


            setPendingTestimonials(testimonials)

        }catch(error){
            console.error(error);
        }
    }

    const fetchApprovedTestimonials = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getApprovedTestimonials')
            console.log(res.data.testimonials);
            

            const approved = res.data.testimonials.map(testimonial => ({
                name: testimonial.name,
                applicantType: testimonial.applicantType,
                email: testimonial.email,
                contact: testimonial.contactNumber,
                message: testimonial.text,
            })); // Create array of testimonial objects
 

            setApprovedTestimonials(approved)

        }catch(error){
            console.error(error);
        }
    }

    

    const handleApprove = (id) => {
        const selectedTestimonial = pendingTestimonials.find(testimonial => testimonial.id === id);
        setApprovedTestimonials([...approvedTestimonials, selectedTestimonial]);
        setPendingTestimonials(pendingTestimonials.filter(testimonial => testimonial.id !== id));
    };

    const handleRemovePending = (id) => {
        const filteredTestimonials = pendingTestimonials.filter(testimonial => testimonial.id !== id);
        setPendingTestimonials(filteredTestimonials);
    };

    const handleRemoveApproved = (id) => {
        const filteredTestimonials = approvedTestimonials.filter(testimonial => testimonial.id !== id);
        setApprovedTestimonials(filteredTestimonials);
    };

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
                                    <td>{testimonial.id}</td>
                                    <td>{testimonial.name}</td>
                                    <td>{testimonial.applicantType}</td>
                                    <td>{testimonial.email}</td>
                                    <td>{testimonial.contact}</td>
                                    <td>{testimonial.message}</td>
                                    <td>
                                        <button className="approve-button" onClick={() => handleApprove(testimonial.id)}>Approve</button>
                                        <button className="remove-button" onClick={() => handleRemovePending(testimonial.id)}>Remove</button>
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
                                    <td>{testimonial.id}</td>
                                    <td>{testimonial.name}</td>
                                    <td>{testimonial.applicantType}</td>
                                    <td>{testimonial.email}</td>
                                    <td>{testimonial.contact}</td>
                                    <td>{testimonial.message}</td>
                                    <td>
                                        <button className="remove-button" onClick={() => handleRemoveApproved(testimonial.id)}>Remove</button>
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
