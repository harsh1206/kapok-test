const initState = {
    posts: [
        {id: '1', branchId: 'futbol', title: 'some stuff here', content: 'kill me pls'},
        {id: '2', branchId: 'basket', title: 'some stuff here twice', content: 'kill me pls 2'},
        {id: '3', branchId: 'ooooof', title: 'some stuff here thrice', content: 'kill me pls 3'},
    ]
}

const postReducer = (state = initState, action) => {

    switch (action.type) {
      case "CREATE_POST":
        console.log("Created Post", action.post);
        break;
      case "CREATE_POST_ERR":
        console.log("Create Post Error:", action.err);
        break;
      case "UPVOTE_POST":
        console.log("Upvoted Post", action.post);
        break;
      case "UPVOTE_POST_ERR":
        console.log("Upvote Post err", action.err);
        break;
      case "DOWNVOTE_POST":
        console.log("Downvoted Post", action.post);
        break;
      case "DOWNVOTE_POST_ERR":
        console.log("Downvote Post err", action.err);
        break;
      case "REMOVE_UPVOTE_POST":
        console.log("Removed Upvote from Post", action.post);
        break;
      case "REMOVE_UPVOTE_POST_ERR":
        console.log("Remove Upvote Post err", action.err);
        break;
      case "REMOVE_DOWNVOTE_POST":
        console.log("Remove Downvote from Post", action.post);
        break;
      case "REMOVE_DOWNVOTE_POST_ERR":
        console.log("Remove Downvote from Post err", action.err);
        break;
      case "COMMENT":
        console.log("Comment added", action.post)
        break;
      case "COMMENT_ERR":
        console.log("Comment err", action.err)  
        break;
      default:
        break;
    }

    return state;
}

export default postReducer