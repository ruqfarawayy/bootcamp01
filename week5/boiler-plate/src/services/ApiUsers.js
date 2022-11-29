import API_URLS from "../enums/api-urls";
import ApiService from "./clientBlog";

export const getUser = () => {
 const token = localStorage.getItem("token");
 return ApiService.request({
  url: API_URLS.USERS,
  method: "get",
  headers: {
    authorization: `Bearer ${token}`,
  },
})
};

export const getUserAll = () => {
 const token = localStorage.getItem("token");
 return ApiService.request({
  url: API_URLS.USERS_GETALL,
  method: "get",
  headers: {
    authorization: `Bearer ${token}`,
  },
})
};


