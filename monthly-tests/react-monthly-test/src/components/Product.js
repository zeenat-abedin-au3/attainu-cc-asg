import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions";

class Product extends Component {
    render() {
        const isMatched = this.props.products.find(
            product => product.id === +this.props.match.params.id
        );
        if (!isMatched) {
            return <h3 className="text-center">No Product Found</h3>;
        }
        return (
            <div className="row">
                <div className="col-6">
                    <img src={isMatched.img} alt={isMatched.name} />
                </div>
                <div className="col-6">
                    <div>{isMatched.name}</div>
                    <div> ₹ {isMatched.price}</div>
                    <div> {isMatched.tag}</div>
                    <br />
                    <button
                        className="btn btn-outline-primary"
                        disabled={!this.props.loggedIn}
                        onClick={this.props.addToCart}
                    >
                        {" "}
                        Add To Cart</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    products: state.deals.data,
    loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps, { addToCart })(Product);
