// AdminBlogs.js
import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './AdminBlogs.scss';
import BlogData from '../../sections/Blogs/BlogData';
import AdminNavbar from '../../components/AdminNavBar/AdminNavBar';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState(BlogData);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editBlogIndex, setEditBlogIndex] = useState(null);
    const [newBlog, setNewBlog] = useState({ title: '', description: '', image: null });

    const deleteBlog = (index) => {
        const updatedBlogs = [...blogs];
        updatedBlogs.splice(index, 1);
        setBlogs(updatedBlogs);
    };

    const handleCreateButtonClick = () => {
        setShowCreateForm(true);
    };

    const handleEditButtonClick = (index) => {
        setShowEditForm(true);
        setEditBlogIndex(index);
        const blogToEdit = blogs[index];
        setNewBlog({ title: blogToEdit.title, description: blogToEdit.description, image: blogToEdit.img });
    };

    const handleSaveButtonClick = () => {
        // Add your logic here to save the edited or new blog
        if (editBlogIndex !== null) {
            const updatedBlogs = [...blogs];
            updatedBlogs[editBlogIndex] = newBlog;
            setBlogs(updatedBlogs);
        } else {
            setBlogs([...blogs, newBlog]);
        }
        setShowCreateForm(false);
        setShowEditForm(false);
        setEditBlogIndex(null);
        setNewBlog({ title: '', description: '', image: null }); // Reset the newBlog state
    };

    const handleCancelButtonClick = () => {
        setShowCreateForm(false);
        setShowEditForm(false);
        setEditBlogIndex(null);
        setNewBlog({ title: '', description: '', image: null }); // Reset the newBlog state
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog({ ...newBlog, [name]: value });
    };

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setNewBlog({ ...newBlog, image });
    };

    return (
        <>
            <AdminNavbar />
            <div className="admin-blogs">
                <div className="admin-header">
                    <SectionTitle
                        subTitle="Admin Blogs"
                        title="Manage Blogs"
                        description="You can edit, delete, or create new blogs."
                    />
                    <button className="create-button" onClick={handleCreateButtonClick}>Create New Blog</button>
                </div>
                <div className="blogs-container">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-item">
                            <img src={blog.img} alt={`blog${index}`} />
                            <div className="blog-text">
                                <span>{blog.category}</span>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <div className="button-container">
                                    <button className="edit-button" onClick={() => handleEditButtonClick(index)}>Edit</button>
                                    <button className="delete-button" onClick={() => deleteBlog(index)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {(showCreateForm || showEditForm) && (
                    <div className="create-blog-form">
                        <h2>{editBlogIndex !== null ? 'Edit Blog' : 'Create New Blog'}</h2>
                        <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleInputChange} />
                        <textarea name="description" placeholder="Description" value={newBlog.description} onChange={handleInputChange}></textarea>
                        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                        <div className="button-container">
                            <button onClick={handleSaveButtonClick}>Save</button>
                            <button onClick={handleCancelButtonClick}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminBlogs;
