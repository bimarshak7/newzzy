import { GET_ENG, GET_NEP, LANG} from '../actions/types.js';

const initialState = {
    news: [],
    isLoading:true,
    lang:false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ENG:
        case GET_NEP:
            return {
                ...state,
                news: action.payload,
                isLoading:false
            };
        case LANG:
            return {
                ...state,
                lang:!state.lang,
                isLoading:true
            };
        default:
            return state;
    }

}