import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Get_suggested_users_list(fist, last) {
  try {
    const Data = await axios.get(
      `${variables.https}api/users/suggested?page=${fist}&per_page=${last}`
    );
    const datas = Data.data;
    return datas;
  } catch (error) {
    console.log(error);
  }
}
export default Get_suggested_users_list;
