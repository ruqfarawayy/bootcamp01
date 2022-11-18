import ApiService from "./clientBlog";

export const getUser = () => {
 const token = localStorage.getItem("token");
 return ApiService.request({
  url: "/users",
  method: "get",
  headers: {
    authorization: `Bearer ${token}`,
  },
})
};

export const getUserAll = () => {
 const token = localStorage.getItem("token");
 return ApiService.request({
  url: "/users/getall",
  method: "get",
  headers: {
    authorization: `Bearer ${token}`,
  },
})
};


