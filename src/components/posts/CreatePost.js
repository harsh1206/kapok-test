import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';



export class CreatePost extends Component {
    

    state = {
        branchId: 'football',
        title: '',
        content: '',
        userId:this.props.auth.uid
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        //console.log("hi i am good boy");
        // this.props.addPost(); 
        this.props.history.push('/');
    }

    render() {
 
         //console.log("Hi",this.props);
 
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                    <div className="input-field">
                        <label htmlFor="branch">Branch</label>
                        <input disabled type="text" id="branch" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}/>
                        <label htmlFor="content">Content</label>
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
    return {
        createPost: (post) => dispatch(createPost(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
