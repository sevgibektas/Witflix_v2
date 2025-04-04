import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const Controller = styled.div`
position: fixed;
right: 1rem;
bottom: 1rem;
display: flex;
gap: 1rem;
`;

function NavController() {
  return (
    <Controller>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/browse">Browse</Link>

    
    </Controller>
  )
}

export default NavController