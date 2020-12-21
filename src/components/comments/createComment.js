import React, { Component } from 'react';
import { createComment } from '../../store/actions/postActions';
import { connect } from 'react-redux';

class CreateComment extends Component{
    state = {
        comment: '',
        userId: this.props.auth.uid,
        id: this.props.postId
    }
    handleChange = (e) => {
        this.setState({
            comment: e.target.value     
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createComment(this.state);
        // this.props.history.push('/');
    }

    render(){
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <div className="input-field">
                    <label htmlFor="title">Comment</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
      auth: state.firebase.auth
    };
  };
  

const mapDispatchToProps = (dispatch) => {
    return{
        createComment: (post) => dispatch(createComment(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);