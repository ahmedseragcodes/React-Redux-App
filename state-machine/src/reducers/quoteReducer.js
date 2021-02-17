import { FETCH_QUOTE_LOADING, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "../actions/quoteActions";

export const initialState={
    text: "",
    author: "",
    isFetching: false,
    error: ""
}

export const reducer=(state=initialState, action)=>{
    switch(action.type){
        default:
            return  state;
    }
}

