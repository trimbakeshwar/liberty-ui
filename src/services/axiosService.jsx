import axios from "axios";
import url from "../datas.json"
class AxiosService {  
   
    Get(){
        return axios.get("../datas.json");
    }
   
}
export default AxiosService;