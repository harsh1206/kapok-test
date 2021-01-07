import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class CreatePost extends Component {
    

    state = {
        branchId: '',
        title: '',
        content: '',
        userId:this.props.auth.uid,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    handleChangeForAutoComplete = (value) => {
        this.setState({
            branchId: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    
    

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                    <Autocomplete
                        id="textFieldTobranchId"
                        options={top100Films(this.props?.branchesOrdered)}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        onChange={(event, value) => this.handleChangeForAutoComplete(value?.id)}
                        renderInput={(params)=>
                            <TextField 
                                {...params}
                                id="textFieldTobranchId"
                                label="Branch" 
                                variant="outlined"
                                fullWidth
                            /> 
                        }
                    />
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

const top100Films = (branchesOrdered) => branchesOrdered

const mapStateToProps = (state) => {
  const branchesOrdered = state.firestore.ordered.branches;
  return {
    auth: state.firebase.auth,
    branchesOrdered: branchesOrdered
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'branches' }
    ])
    )(CreatePost)
