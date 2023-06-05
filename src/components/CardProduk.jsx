import React from 'react'

const CardProduk = (props) => {
    return (
        <div onClick={props.myAlert}>
            <br />
            <img src={props.imgUrl} style={{ width: '100%' }} />
            <h2>{props.namaProduk}</h2>
            <p>{props.hargaProduk}</p>
        </div>
    )
}

export default CardProduk