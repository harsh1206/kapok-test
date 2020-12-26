export const createBranch = (branch) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
       firestore
         .collection("branches")
         .add({
           ...branch,
           numSubscribedPeople: null,
           moderatorList: null
         })
         .then(() => {
           dispatch({ type: "CREATE_BRANCH", branch: branch });
         })
         .catch((err) => {
           dispatch({ type: "CREATE_BRANCH_ERROR", err: err });
         });
    }
};