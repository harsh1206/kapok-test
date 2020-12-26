import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBranch } from '../../store/actions/branchActions';



export class CreateBranch extends Component {
    

    state = {
        title: '',
        discription: '',
        userId:this.props.auth.uid
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBranch(this.state);
        // this.props.history.push('/');
    }

    render() {
 
         //console.log("Hi",this.props);
 
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Branch</h5>
                    <div className="input-field">
                        <label htmlFor="title">Branch Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <textarea className="materialize-textarea" id="discription" onChange={this.handleChange}/>
                        <label htmlFor="discription">Branch Discription</label>
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
        createBranch: (post) => dispatch(createBranch(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBranch)
