import axios from "axios";
import { variables } from "../Public_variable/Variable";
async function Get_api_search(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/users/search?q=f&type=less`
    );
    const datas = Data.data.data;
    return datas;
  } catch (error) {
    console.log(error);
  }
}
export default Get_api_search;
