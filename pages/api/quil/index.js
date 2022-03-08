import axios from "axios";

const quilHandler = async(req, res) => {
    switch(req.method){
        case 'POST':
            try {
                const { quil } = req.body;
                res.send(quil)
            } catch (error) {
                res.send(error.message);
                res.end();
            }
        case 'GET':
    }
}

export default quilHandler