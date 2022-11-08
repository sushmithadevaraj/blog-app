import React from 'react'
import { Link } from 'react-router-dom'


const [inputs, setInputs] = useState({
  username:"",
  password: "",
})

const [err, setError] = useState(null);
const navigate = useNavigate();

const handleChange = (e) => {
setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
console.log(inputs);
}

const handleSubmit = async e =>{
e.preventDefault();
try{
await axios.post("auth/register", inputs);
navigate("/login");
}catch (err){
setError(err.response.data);
}
// const res = await axios.post("")
}

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input type="text" placeholder='password'password = 'password'onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account?
          <Link to = "/Register">Register</Link>
        </span>
      </form>

    </div>
  )
}
export default Login