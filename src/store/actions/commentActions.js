export const createComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile; 
        const authorId = getState().firebase.auth.uid;

       firestore
         .collection("comments")
         .add({
           ...comment,
           authorFirstName: profile.firstName,
           authorLastName: profile.lastName,
           commentCreatedAt: new Date(),           
           upvotes: null,
           downvotes: null,
           isUpvoted: false,
           isDownvoted : false,
         })
         .then(() => {
          dispatch({ type: "COMMENT", comment: comment });
        })
        .catch((err) => {
          dispatch({ type: "COMMENT_ERR", err: err });
        });
    }
};


export const upvotePost = (comment) =>{

  return (dispatch,getState,{getFirebase,getFirestore}) => {

     const firestore = getFirestore();
     const firebase = getFirebase();
     const userId = getState().firebase.auth.uid;
     
     
     firestore
       .collection("comments")
       .doc(comment.id)
       .update({
         upvotes: firebase.firestore.FieldValue.arrayUnion(userId),
         isUpvoted:true
       })
       .then(() => {
         dispatch({ type: "UPVOTE_POST", comment: comment });
       })
       .catch((err) => {
         dispatch({ type: "UPVOTE_POST_ERR", err: err });
       });
  }
}

export const downvotePost = (comment) => {

 return (dispatch, getState, { getFirebase, getFirestore }) => {
   const firestore = getFirestore();
   const firebase = getFirebase();
   const userId = getState().firebase.auth.uid;

   firestore
     .collection("comments")
     .doc(comment.id)
     .update({
       downvotes: firebase.firestore.FieldValue.arrayUnion(userId),
       isDownvoted: true
     })
     .then(() => {
       dispatch({ type: "DOWNVOTE_POST", comment: comment });
     })
     .catch((err) => {
       dispatch({ type: "DOWNVOTE_POST_ERR", err: err });
     });
 };

}
export const removeUpvoteFromPost = (comment) => {
 return (dispatch, getState, { getFirebase, getFirestore }) => {
   const firestore = getFirestore();
   const firebase = getFirebase();
   const userId = getState().firebase.auth.uid;

   firestore
     .collection("comments")
     .doc(comment.id)
     .update({
       upvotes: firebase.firestore.FieldValue.arrayRemove(userId),
       isUpvoted:false
     })
     .then(() => {
       dispatch({ type: "REMOVE_UPVOTE_POST", comment: comment });
     })
     .catch((err) => {
       dispatch({ type: "REMOVE_UPVOTE_POST_ERR", err: err });
     });
 };
};

export const removeDownvoteFromPost = (comment) => {
 return (dispatch, getState, { getFirebase, getFirestore }) => {
   const firestore = getFirestore();
   const firebase = getFirebase();
   const userId = getState().firebase.auth.uid;

   firestore
     .collection("comments")
     .doc(comment.id)
     .update({
       downvotes: firebase.firestore.FieldValue.arrayRemove(userId),
       isDownvoted:false
     })
     .then(() => {
       dispatch({ type: "REMOVE_DOWNVOTE_POST", comment: comment });
     })
     .catch((err) => {
       dispatch({ type: "REMOVE_DOWNVOTE_POST_ERR", err: err });
     });
 };
};
