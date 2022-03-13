import axios from "axios";

const profileHandler = async(req, res) => {
  switch(req.method) {
    case 'POST':
      try {
        
      } catch (error) {
        
      }
      break;
    case 'GET':
      try {
        const { uid } = req.headers;
        const response = await axios.get('http://localhost:5000/api/quil/userquils', { headers: { uid } });
        res.send(response.data)
      } catch (error) {
        res.send(error)
        res.end()
      }
      break;
  }
}

export default profileHandler;