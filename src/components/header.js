import React from 'react'
import {Link} from 'react-router-dom'


const Header = () =>{
    return(
        <div className='header'>
        
            <Link className='active' style={{textDecoration:"none"}} to='/'>Posts</Link>
        </div>
    )
}

export default Header