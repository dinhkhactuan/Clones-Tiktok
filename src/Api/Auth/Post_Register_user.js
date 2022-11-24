import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Post_register(email, password) {
  try {
    const Data = await axios.post(`${variables.https}api/auth/register`, {
      type: "email",
      email,
      password,
    });
    return Data.data;
  } catch (error) {
    console.log(error);
  }
}
export default Post_register;
