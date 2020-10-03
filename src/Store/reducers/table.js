import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../../Shared/utility";


const initialState = {
   tableData:null,
}

const populateTableData=(state,action)=>{
    console.log(action.payload)
    return updateObject(state,{tableData:action.payload})
}

const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPULATE_TABLE_DATA:
            console.log(action.payload)
            return populateTableData(state, action);
        default:
            return state
    }
}

export default TableReducer;