import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Get_api_follow(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/me/followings?page=${param}`
    );
    console.log(Data);
    return Data;
  } catch (error) {
    console.log(error);
  }
}

export default Get_api_follow;
