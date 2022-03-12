import axios from "axios";

const quilHandler = async(req, res) => {
    switch(req.method){
        case 'POST':
            try {
                const { input } = req.body;
                const response = await axios.post('http://localhost:5000/api/quil/newquil', { input });
                res.send(response.data)
            } catch (error) {
                res.send(error.message);
                res.end();
            }
        case 'GET':
            try{
                const response = await axios.get('http://localhost:5000/api/quil/feed');
                res.send(response.data);
            } catch(error) {
                res.send(error.message);
                res.end();
            }
    }
}

export default quilHandler