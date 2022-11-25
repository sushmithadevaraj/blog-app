// import express from "express"
// import { JsonWebTokenError } from "jsonwebtoken";
import db  from "../db.js";
import jwt from "jsonwebtoken";


export const getPosts = (req, res)=>{
    const q = req.query.cat? "SELECT * FROM posts WHERE cat=?": "SELECT * FROM posts";

    db.query(q,[req.query.cat], (err, data) =>{
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
    console.log(req.query);
}

export const getPost = (req,res)=>{
    const q = "SELECT `username`, `title`, p.img,u.img AS userImg,`desc`, `cat`,`date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?"
    db.query(q,[req.params.id], (err,data)=>{
        console.log(err);
        if(err) return res.status(500).json(err)
        return res.status(200).json(data[0])

    })
}

export const addPost = (req,res)=>{
    res.json("from")
}
export const deletePost = (req,res)=>{
    const token = req.cookies.access_token;
    console.log(req);
    if(!token) return res.status(401).json("Not authenticated")

    jwt.verify(token, "jwtkey", (err, userInfo) =>{
        if(err) return res.status(403).json("token is not valid")

        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `Uid` = ?";
    
        db.query(q,[postId,userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("You can delete only your post")
            return res.json("post had been deleted");
        });
    });
};
export const updatePost = (req,res)=>{
    res.json("from")
}
// router.get("/test", (req,res)=>{
//     res.json("this is post")
// })

// export default router