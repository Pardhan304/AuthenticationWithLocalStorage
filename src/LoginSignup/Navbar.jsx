import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a className='head' href='/home'>Explore!</a>
                    <a href='/signup'>Signup</a>
                    <a href='/login'>Login</a>

                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar