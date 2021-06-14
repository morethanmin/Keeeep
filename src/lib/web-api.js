import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

export const createMemo = ({ title, body }) =>
  axios.post("/memo", { title, body });

// 역순으로 최근 작성된 포스트 20개를 불러온다.
export const getInitialMemo = () =>
  axios.get("/memo/?_sort=id&_order=DESC&_limit=20");

// cursor 기준 최근 작성된 메모를 불러온다.
export const getRecentMemo = (cursor) =>
  axios.get(`/memo/?id_gte=${cursor + 1}&_sort=id&_order=DESC&`);
