import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar.js'
import Home from './components/home/Home'
import PostDetails from './components/posts/PostDetails'
import SignIn from "./components/auth/SignIn.js";
import SignUp from "./components/auth/SignUp.js";
import CreatePost from "./components/posts/CreatePost.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route path='/createPost' component={CreatePost} />
            <Route path='/b/:branchId/p/:postId' component= {PostDetails} />
            {/* {() => <PostDetails name={this.props.name} />} */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
