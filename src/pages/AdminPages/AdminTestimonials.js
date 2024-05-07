import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AdminTestimonials.scss';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';
import axios from 'axios';

const AdminTestimonials = () => {
    const [pendingTestimonials, setPendingTestimonials] = useState([
        { id: 1, name: 'John Doe', type: 'Alumni', email: 'john@example.com', contact: '1234567890', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', approved: false },
        { id: 2, name: 'Jane Smith', type: 'Parent', email: 'jane@example.com', contact: '9876543210', message: 'Nulla facilisi. Vivamus lacinia arcu vitae ex rutrum, vel accumsan ligula elementum.', approved: false },
        { id: 3, name: 'Alice Johnson', type: 'Alumni', email: 'alice@example.com', contact: '5678901234', message: 'Fusce pharetra, urna nec fringilla lobortis, magna arcu efficitur magna, id facilisis mauris magna eu risus.', approved: false },
    ]);

    useEffect(() => {
        fetchTestimonialsParents();
    }, [])

    const fetchTestimonialsParents = async () => {
        try {
            const res = await axios.get('https://lks-server.onrender.com/getTestimonialsAdmin/Parent/Pending', { withCredentials:true })
            console.log(res.data.testimonials);
        }catch(error){
            console.error(error);
        }
    }

    const [approvedTestimonials, setApprovedTestimonials] = useState([]);

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
                                    <td>{testimonial.type}</td>
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
                                    <td>{testimonial.type}</td>
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
