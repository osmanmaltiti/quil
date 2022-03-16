import axios from "axios";

const recommendedHandle = async(req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/user/recommended');
    res.send(response.data)
  } catch (error) {
    res.status(401).send(error);
    res.end()
  }
}

export default recommendedHandle;