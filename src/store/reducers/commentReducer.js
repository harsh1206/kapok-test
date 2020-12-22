const initState = {
    comments: [
        {commentId: '1', postId: 'BmAWsCkQmXKZZrsUwhdL', content: 'some stuff here', userId: 'Y3GJGbhQKnXS2JOslwuPTFY1uhc2'},
        {commentId: '2', postId: 'mjktsD6fq2ID3EBXFvIX', content: 'some stuff here twice', userId: 'w2VNCvah47RGkyTGaGopT5GMGrV2'},
        {commentId: '3', postId: 'BmAWsCkQmXKZZrsUwhdL', content: 'some stuff here thrice', userId: 'yGDfVBWab5QVPep6gNCOyC13d4F3'}
    ]
}

const commentReducer = (state = initState, action) => {

    switch (action.type) {
      case "COMMENT":
        console.log("Comment added", action.comment)
        break;
      case "COMMENT_ERR":
        console.log("Comment err", action.err)  
        break;
      default:
        break;
    }

    return state;
}

export default commentReducer