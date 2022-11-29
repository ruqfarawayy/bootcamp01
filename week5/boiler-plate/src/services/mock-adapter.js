import ApiService from "./clientBlog";
import API_URLS from "../enums/api-urls";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(ApiService, {
  onNoMatch: "passthrough",
  delayResponse: 1000,
});

mock.onPost(API_URLS.AUTH_REGISTER).reply(200, {
  status: "true",
  code: "200",
  message: "[mock] registrasi sukses",
});

mock.onPost(API_URLS.AUTH_LOGIN).reply(200, {
  status: "true",
  code: "200",
  message: "[mock] login sukses",
  data: {
    token: "mock-user-token",
  },
});

mock.onGet(API_URLS.USERS).reply(200, {
  status: "true",
  code: "200",
  message: "[mock] login sukses",
  data: {
   id: 3,
   name: "ahmad",
   username: "ucup", 
  },
});

mock.onGet(API_URLS.USERS_GETALL).reply(200, {
  status: "true",
  code: "200",
  message: "[mock] login sukses",
  data: [
    {
      id: 3,
      name: "ahmad",
      username: "ucup",
    },
  ],
});
