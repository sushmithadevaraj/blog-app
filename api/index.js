import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.js"
// import userRoutes from "./routes/users.js"
// import postRoutes from "./routes/posts.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)

app.get("/test", (req,res)=>{
    // app.use("./api/users", postRoutes)
    // app.use("/api/posts", postRoutes)
})

app.listen(8800,()=>{
    console.log("Connected!")
})