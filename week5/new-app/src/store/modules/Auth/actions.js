import API_URLS from "@/src/enums/api-urls";
import URLS from "@/src/enums/urls";
import ApiService from "@/src/services/clientBlog";
// import navigateTo from "@/src/utils/navigateTo";
import ACTION_TYPES from "@/src/store/types/action-types";
import REDUCER_TYPES from "@/src/store/types/reducer-types";
import AUTH_GETTERS from "./getters";
import { get } from "lodash";

/**
 * berisi perintah untuk integrasi ke backend rest api
 */
const AUTH_ACTIONS = {
  [ACTION_TYPES.POST_AUTH_LOGIN]({ username, password }) {
    // auth login ke api
    return async (dispatch, state) => {
      // dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: true });
      return await ApiService.request({
        url: API_URLS.AUTH_LOGIN,
        method: "POST",
        data: {
          username,
          password,
        },
      })
        .then((response) => {
          const data = get(response, "data.data", []);
          const statusCode = get(response, "data.statusCode", null);
          const message = get(response, "data.message", "undefined message");
          dispatch({
            type: REDUCER_TYPES.AUTH_LOGIN,
            data,
            statusCode,
            message,
          });
          return response;
        })
        .catch((error) => {
          throw error;
        })
    };
  },

  [ACTION_TYPES.POST_AUTH_LOGOUT]() {
    // auth login ke api
    return async (dispatch, state) => {
      const token = AUTH_GETTERS.loginToken(state());
      // dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: true });
      return await ApiService.request({
        url: API_URLS.AUTH_LOGOUT,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          dispatch({ type: REDUCER_TYPES.AUTH_LOGOUT });
          return response;
        })
        .catch((error) => {
          throw error;
        })
    };
  },
};

export default AUTH_ACTIONS;
