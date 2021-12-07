import React from 'react'
import Button from '@mui/material/Button';

function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
            <Button variant="contained">Hello World</Button>
            
        </header>
    )
}

export default Header
