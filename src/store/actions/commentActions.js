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
           upvotes:[""],
           downvotes:[""],
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
