import axios from 'axios';

const updateHandler = async(req, res) => {
    const { type } = req.query
    switch (type) {
        case 'profile update':
            try {
                const {update} = req.body;
                const { uid, name, bio } = update;
                
                const profile = axios.post('http://localhost:5000/api/user/updateprofile', 
                { fullname: name, bio }, 
                { headers: { uid } });
                
                const quil = axios.patch('http://localhost:5000/api/quil/profile', 
                { fullname: name }, 
                { headers: { uid } });
                
                const response = await axios.all([profile, quil])

                res.send(response[0].data)
            } catch (error) {
                res.status(401).send(error);
                res.end();
            }
            break;
        case 'password update':
            try {
                const { update } = req.body;
                const response = await axios.post('http://localhost:5000/api/user/updateprofile', 
                { update })
            } catch (error) {
                
            }
            break;
    }
}

export default updateHandler;