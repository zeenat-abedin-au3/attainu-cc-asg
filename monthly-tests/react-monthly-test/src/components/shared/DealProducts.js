import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DealProducts extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-10 m-auto">
                    <div className="row">
                        {this.props.deals.map(deal => (
                            <div key={deal.id} className="col-md-3">
                                <Link className="deal-product" to={`/product/${deal.id}`}>
                                    <div className="card">
                                        <img
                                            src={deal.img}
                                            alt={deal.name}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <p className="font-weight-bold">{deal.name}</p>
                                            <p className="text-success">{deal.group}</p>
                                            <p>{deal.tag}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    deals: state.deals.data
});

export default connect(mapStateToProps)(DealProducts);
