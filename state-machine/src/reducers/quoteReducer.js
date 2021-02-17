import { FETCH_QUOTE_LOADING, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "../actions/quoteActions";

export const initialState={
    text: "",
    author: "",
    isFetching: false,
    error: ""
}

export const reducer=(state=initialState, action)=>{
    switch(action.type){
        case(FETCH_QUOTE_LOADING):
            return ({
                ...state,
                isFetching: true,
            })
        case(FETCH_QUOTE_SUCCESS):
            return ({
                ...state,
                text: action.payload,
                author: action.payload,
                isFetching: false,
            })
        case(FETCH_QUOTE_FAILURE):
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        default:
            return  state;
    }
}

