import * as actionTypes from "./actionTypes";

import AxiosConfig from "../../Axios/axiosConfig";

export const populateTableDataSync = (tableData) => {
  return {
    type: actionTypes.POPULATE_TABLE_DATA,

    payload: tableData,
  };
};

export const populateTableDataASync = () => (dispatch, getState) =>{
    return (
        AxiosConfig.get("/users")
        .then((res) => {
          return dispatch(populateTableDataSync(res.data));
        })
        .catch((error) => console.log(error))
    )
}
 

export const editTableDataASync = (user) => (dispatch, getState) =>
{
    console.log(user)
    return AxiosConfig.put(`/users/${user.id}`, user)
    .then((response) => {})
    .then((res) => {
      return dispatch(populateTableDataSync(res.data));
    })
    .catch((error) => console.log(error));
}

  
