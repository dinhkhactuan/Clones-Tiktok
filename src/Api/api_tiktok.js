import axios from "axios";
import { variables } from "../Public_variable/Variable";
async function data(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/users/search?q=${param}&type=less&fbclid=IwAR0_ntBxmDS87hwRuukkzVG7k_OHUI1zCM6YtXosEe2xB0ea0fQUuQpy05o`
    );
    const datas = Data.data.data;

    return datas;
  } catch (error) {
    console.log(error);
  }
}
export default data;
