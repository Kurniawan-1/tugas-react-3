import React from 'react'

const Header = () => {

    const name = 'Kurniawan'

    return (
        <header style={{
            padding: 20,
            textAlign: 'center',
            fontSize: 46,
            color: "black",
            backgroundColor: 'grey'
        }}>
            {name}
        </header>
    )
}

export default Header