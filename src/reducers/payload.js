import { PAYLOAD_SUCCESS, PAYLOAD_FAIL } from "../actions/types";

const initialState = {
  data: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAYLOAD_SUCCESS:
      return {
        ...state,
        data: payload,
      };

    case PAYLOAD_FAIL:
      return {
        ...state,
        user: null,
      };

    default: {
      return state;
    }
  }
}
