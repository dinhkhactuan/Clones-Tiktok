import axios from "axios";
import { variables } from "../Public_variable/Variable";
async function Get_api_search(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/users/search?q=f&type=less`
    );
    const datas = Data.data.data;
    console.log(datas);
    return datas;
  } catch (error) {
    console.log(error);
  }
}
Get_api_search().then((res) => console.log(res));
export default Get_api_search;
