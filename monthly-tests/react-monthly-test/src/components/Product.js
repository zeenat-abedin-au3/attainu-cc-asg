import React, { Component } from 'react'

const Product = ({ id, name, description, img, price }) => {
    return (
        <article className>
            <div className="text-center">
                <img src=""></img>
                <h1 className></h1>
                <h2 className></h2>
                <button type="button" className="btn btn-success">Success</button>
            </div>
        </article>
    );
};
export default Product