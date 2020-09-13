import { HISTORY_SUCCESS, HISTORY_FAIL } from "../actions/types";

const initialState = {
  data: null,
  //   loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HISTORY_SUCCESS:
      return {
        ...state,
        data: payload,
      };

    case HISTORY_FAIL:
      return {
        ...state,
        user: null,
      };

    default: {
      return state;
    }
  }
}
