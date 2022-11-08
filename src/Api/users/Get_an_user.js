import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Get_an_user(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/users/suggested?page=1&per_page=12`
    );
    const datas = Data.data.data;

    return datas;
  } catch (error) {
    console.log(error);
  }
}
export default Get_an_user;
