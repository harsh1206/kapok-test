export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile; 
        const authorId = getState().firebase.auth.uid;

       firestore
         .collection("posts")
         .add({
           ...post,
           authorFirstName: profile.firstName,
           authorLastName: profile.lastName,
           createdAt: new Date(),
           authorId:authorId,
           upvotes:[""],
           downvotes:[""],
           isUpvoted: false,
           isDownvoted : false,
           comment: null,
           userCommented: null,
           isCommented : false,
           commentCreatedAt: null
         })
         .then(() => {
           dispatch({ type: "CREATE_POST", post: post });
         })
         .catch((err) => {
           dispatch({ type: "CREATE_POST_ERROR", err: err });
         });
    }
};

export const upvotePost = (post) =>{

   return (dispatch,getState,{getFirebase,getFirestore}) => {

      const firestore = getFirestore();
      const firebase = getFirebase();
      const userId = getState().firebase.auth.uid;
      
      
      firestore
        .collection("posts")
        .doc(post.id)
        .update({
          upvotes: firebase.firestore.FieldValue.arrayUnion(userId),
          isUpvoted:true
        })
        .then(() => {
          dispatch({ type: "UPVOTE_POST", post: post });
        })
        .catch((err) => {
          dispatch({ type: "UPVOTE_POST_ERR", err: err });
        });
   }
}

export const downvotePost = (post) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .doc(post.id)
      .update({
        downvotes: firebase.firestore.FieldValue.arrayUnion(userId),
        isDownvoted: true
      })
      .then(() => {
        dispatch({ type: "DOWNVOTE_POST", post: post });
      })
      .catch((err) => {
        dispatch({ type: "DOWNVOTE_POST_ERR", err: err });
      });
  };

}
export const removeUpvoteFromPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .doc(post.id)
      .update({
        upvotes: firebase.firestore.FieldValue.arrayRemove(userId),
        isUpvoted:false
      })
      .then(() => {
        dispatch({ type: "REMOVE_UPVOTE_POST", post: post });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_UPVOTE_POST_ERR", err: err });
      });
  };
};

export const removeDownvoteFromPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .doc(post.id)
      .update({
        downvotes: firebase.firestore.FieldValue.arrayRemove(userId),
        isDownvoted:false
      })
      .then(() => {
        dispatch({ type: "REMOVE_DOWNVOTE_POST", post: post });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_DOWNVOTE_POST_ERR", err: err });
      });
  };
};