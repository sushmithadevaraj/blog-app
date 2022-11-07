import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const posts = [
    {
      id:1,
      title: "lorem Content is the information contained within communication media.",
      desc: "Content is the information contained within communication media.",
      img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
      id:2,
      title: "lorem Content is the information contained within communication media.",
      desc: "Content is the information contained within communication media.",
      img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
      id:3,
      title: "lorem Content is the information contained within communication media.",
      desc: "Content is the information contained within communication media.",
      img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
      id:4,
      title: "lorem Content is the information contained within communication media.",
      desc: "Content is the information contained within communication media.",
      img: "https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

  ];
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src= {post.img} alt="" />
            </div>
            {/* <div className='content'>
              <img src={post.img} alt="" />

            </div> */}
            <div className="content">
              <Link className='link'to = {`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        )

        )

        }
      </div>
    </div>
  )
}
