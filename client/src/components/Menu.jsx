import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "lorem Content is the information contained within communication media.",
            desc: "Content is the information contained within communication media.",
            img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id: 2,
            title: "lorem Content is the information contained within communication media.",
            desc: "Content is the information contained within communication media.",
            img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id: 3,
            title: "lorem Content is the information contained within communication media.",
            desc: "Content is the information contained within communication media.",
            img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id: 4,
            title: "lorem Content is the information contained within communication media.",
            desc: "Content is the information contained within communication media.",
            img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

    ];
    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;
