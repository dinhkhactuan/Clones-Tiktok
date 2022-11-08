import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function data_list_svideo(param) {
  try {
    const Data = await axios.get(
      `${variables.https}api/videos?type=for-you&page=${param}`
    );
    const datas = Data.data.data;

    return datas;
  } catch (error) {
    console.log(error);
  }
}
export default data_list_svideo;
