import axios from "axios";
import { API } from "../constants/index";


export const FETCH_QUOTE_LOADING="FETCH_QUOTE_LOADING";
export const FETCH_QUOTE_SUCCESS="FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE="FETCH_QUOTE_FAILURE";

export const getQuote=()=>{
    return dispatch => {
        dispatch(fetchQuoteLoading());


        axios.get(`${API}`)
        .then((res)=>{
            dispatch(fetchQuoteSuccess(res.data[0].text))
            dispatch(fetchQuoteSuccess(res.data[0].author))
        })
        .catch((err)=>{
            dispatch(fetchQuoteFailure(err))
        })
    }
}

export const fetchQuoteLoading=()=>{
    return ({ type: FETCH_QUOTE_LOADING })
}

export const fetchQuoteSuccess=(quote)=>{
    return ({ type: FETCH_QUOTE_SUCCESS, payload: quote })
}

export const fetchQuoteFailure=(error)=>{
    return ({ type: FETCH_QUOTE_FAILURE, payload: error })
}