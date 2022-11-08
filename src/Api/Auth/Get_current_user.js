import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Get_current_user() {
  try {
    const Data = await axios.get(`${variables.https}api/auth/me`);
    const datas = Data;
    return datas;
  } catch (error) {
    console.log(error);
  }
}

export default Get_current_user;
