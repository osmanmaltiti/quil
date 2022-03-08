import axios from 'axios';

const useHandler = async(req, res) => {
    const { value, type } = req.body
    switch(type){
        case 'login':
            try {
                const response = await axios.post('http://localhost:5000/api/user/signin', {
                    value
                });
                res.status(201).send(response.data)
            } catch (error) {
                res.send(error)
                res.end()
            }
            break;
        case 'signup':
            try {
                const response = await axios.post('http://localhost:5000/api/user/signup', {
                    value
                });
                res.status(201).send(response.data)
            } catch(error) {
                res.send(error)
                res.end()
            }
            break;
    }
}

export default useHandler;