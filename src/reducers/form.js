let state = {
    name: "",
    descr: "",
};

const formReducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_NAME': 
            return [
             ...state,
             {
                name: action.payload,
             }
         ]
        case 'CHANGE_DESCR':
            return [
            ...state,
            {
               descr: action.payload,
            }
        ]
        dafault: 
            return state;
    };
}

export default formReducer;