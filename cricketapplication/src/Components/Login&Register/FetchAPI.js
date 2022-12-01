import axios from "axios";

const FetchingProps = ({ base_url, method, data }) => {
  return new Promise(async (resolve, reject) => {
    switch (method) {
      case "POST":
        let response = await axios
          .post(base_url, data)
          .then((res) => {
            return res;
          })
          .catch((error) => error.response);
        resolve(response);
      case "GET":
        return;
      case "PUT":
        return;
      case "DELETE":
        return;
      default:
        return 0;
    }
  });
};

export default FetchingProps;
