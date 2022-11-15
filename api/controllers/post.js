import express from "express"
import db from "../db.js";


export const getPosts = (req, res)=>{
    const q = req.query.cat? "SELECT * FROM posts WHERE cat=?": "SELECT * FROM posts";

    db.query(q,[req.query.cat], (err, data) =>{
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
    console.log(req.query);
}

export const getPost = (req,res)=>{
    res.json("from")
}
export const addPost = (req,res)=>{
    res.json("from")
}
export const deletePost = (req,res)=>{
    res.json("from")
}
export const updatePost = (req,res)=>{
    res.json("from")
}
// router.get("/test", (req,res)=>{
//     res.json("this is post")
// })

// export default router