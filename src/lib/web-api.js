import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

export const createMemo = ({ title, body, color }) =>
  axios.post("/memo", { title, body, color });

// 역순으로 최근 작성된 포스트 20개를 불러온다.
export const getInitialMemo = () =>
  axios.get("/memo/?_sort=id&_order=DESC&_limit=20");

// cursor 기준 최근 작성된 메모를 불러온다.
export const getRecentMemo = (cursor) =>
  axios.get(`/memo/?id_gte=${cursor + 1}&_sort=id&_order=DESC&`);

export const getPreviousMemo = (endCursor) =>
  axios.get(`/memo/?_sort=id&_order=DESC&_limit=20&id_lte=${endCursor - 1}`); // endCursor 기준 이전 작성된 메모를 불러온다

export const updateMemo = ({ id, title, body, color }) =>
  axios.put(`/memo/${id}`, { title, body, color }); // 메모를 업데이트한다.

export const deleteMemo = (id) => axios.delete(`/memo/${id}`); // 메모를 제거한다.
