import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Post_register(email, pass, checkpass) {
  try {
    console.log(email);
    console.log(pass);
    console.log(checkpass);
    const Data = await axios.post(`${variables.https}/api/auth/register`, {
      email,
      password: pass,
      checkpass,
    });
    console.log(email);
    console.log(pass);
    console.log(checkpass);
    console.log(Data);
    return Data;
  } catch (error) {
    console.log(error);
  }
}
export default Post_register;
