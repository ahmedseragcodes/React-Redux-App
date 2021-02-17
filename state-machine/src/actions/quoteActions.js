export const FETCH_QUOTE_LOADING="FETCH_QUOTE_LOADING";
export const FETCH_QUOTE_SUCCESS="FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE="FETCH_QUOTE_FAILURE";

export const fetchQuoteLoading=()=>{
    return ({ type: FETCH_QUOTE_LOADING })
}

export const fetchQuoteSuccess=()=>{
    return ({ type: FETCH_QUOTE_SUCCESS })
}

export const fetchQuoteFailure=()=>{
    return ({ type: FETCH_QUOTE_FAILURE })
}