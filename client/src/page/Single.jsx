import React from 'react'
import Edit from '../img/edit (1).png'
import Delete from '../img/delete (1).png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios';
import moment from "moment";
import { useContext } from 'react'
import {AuthContext} from "../context/authContext"
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Single = () => {
  const [post, setPosts] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const postId = useLocation().pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  // console.log(cat)
  useEffect(() => {
   const fetchData = async () =>{
     try{
       const res = await axios.get(`/posts/${postId}`);
       setPosts(res.data);
       console.log(res.data);

     }catch(err) {
       console.log(err);
     }
   };
   fetchData();
  },


  [postId]);

  
  const handleDelete = async()=>{
    try{
      await axios.delete(`/posts/${postId}`);
      navigate("/");

    }catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && 
          <div className="edit">
            <Link to = {`write?edit= 2`} state={post}>
            <img src={Edit} alt="" />
            </Link>
          <img  onClick={handleDelete}src={Delete} alt="" />
          </div>}
          
        </div>
        <h1>{post.title}</h1>
        <p>
          {post.desc}
        </p>
      </div>
<Menu />
      </div>
    // </div>
    
  )
}

export default Single