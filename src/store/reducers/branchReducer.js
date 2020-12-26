const initState = {
    posts: [
        {id: '1', moderatorList: 'Ved Vyapak', title: 'some stuff here once', content: 'kill me pls', numSubscribedPeople: 10},
        {id: '2', moderatorList: 'Ved Samajhdar',branchId: 'basket', title: 'some stuff here twice', content: 'kill me pls 2', numSubscribedPeople: 15},
        {id: '3', moderatorList: 'Ved Vyapak',branchId: 'ooooof', title: 'some stuff here thrice', content: 'kill me pls 3', numSubscribedPeople: 30}
    ]
}

const branchReducer = (state = initState, action) => {

    switch (action.type) {
      case "CREATE_BRANCH":
        console.log("Create Branch", action.err)  
        break;
      case "CREATE_BRANCH_ERR":
        console.log("Create Branch", action.err)  
        break;  
          
      default:
        break;
    }

    return state;
}

export default branchReducer
