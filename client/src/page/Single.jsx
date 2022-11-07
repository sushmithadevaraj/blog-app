import React from 'react'
import Edit from '../img/edit (1).png'
import Delete from '../img/delete (1).png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to = {`write?edit=`}>
            <img src={Edit} alt="" />
            </Link>
          <img src={Delete} alt="" />
          </div>
          
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, in. Itaque, amet.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus molestiae expedita sint suscipit nobis quam facere consequuntur harum ipsa. Atque.
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ullam ipsam natus ratione quae tenetur repudiandae quaerat rerum aliquid quisquam!

          </p>
        </p>
      </div>
<Menu />
      </div>
    // </div>
    
  )
}

export default Single