import db from "../db.js"


import bcrypt from "bcryptjs"


export const register = (req, res)=>{
const q = "SELECT * FROM users WHERE email = ? OR username = ?"

db.query(q,[req.body.email, req.body.username], (err, data) =>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("user already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.email,
        hash,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.status(200).json("user has been created");
    } );
})

}
export const login = (req, res)=>{
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req, body, ussername], (err, data) =>{
        if(err) return res.json(err);
        if (data.length == 0) return res.status(404).json("user not found!")
    
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("wrong username or password");

        const token = jwt.sign({id:data[0].id}, "jwtkey");

        res.cookie("access_token", token,{
            htttpOnly:true
        })
        .status(200)
        .json(data[0])
    
    });
    
};
export const logout = (req, res)=>{
    
}