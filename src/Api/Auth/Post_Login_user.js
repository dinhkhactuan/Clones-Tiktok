import axios from "axios";
import { variables } from "../../Public_variable/Variable";
async function Post_Login(email, password) {
  try {
    const Data = await axios.post(`${variables.https}api/auth/login`, {
      email: email,
      password: password,
    });
    const datas = Data;

    return datas;
  } catch (error) {
    console.log(error);
  }
}

export default Post_Login;
