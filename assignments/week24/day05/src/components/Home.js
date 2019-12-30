import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/actionDetails'


class Home extends Component {
    handleDelete = id => {

        this.props.deletePost(id)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.posts.map(post => (
                        <div className="card my-2" key={post.id}>
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                {post.body}
                                <button onClick={() => this.handleDelete(post.id)} className="btn btn-success float-right">DELETE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsStore.posts
    }
}

export default connect(mapStateToProps, { deletePost })(Home)