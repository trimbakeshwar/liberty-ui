import datas from "../datas.json"

const iState = {
    dashbord : datas
}
const reducer = (state=iState,action)=>{
    if(action.type === "GET_DASHBOARD_DATA")
  {
        return {
            ...state,
            dashbord :action.payload,
            
        }
    }
    return state
    
}
export default reducer