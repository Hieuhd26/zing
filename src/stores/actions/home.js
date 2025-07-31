import actionType from "./actionType";
import * as api from "../../apis";

export const getHome = () => async (dispatch) => {
  try {
    const response = await api.getHome();
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.GET_HOME,
        homeData: null,
      });
    } else {
      dispatch({
        type: actionType.GET_HOME,
        homeData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_HOME,
      homeData: null,
    });
  }
};

// cong viec can goi api ko the gui obj ma gui ham goi api
