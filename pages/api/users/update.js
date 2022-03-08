import axios from 'axios';

const updateHandler = async(req, res) => {
    const { type } = req.query
    switch (type) {
        case 'profile update':
            try {
                const { update } = req.body;
                
            } catch (error) {
                
            }
        case 'password update':
            try {
                const { update } = req.body;
                
            } catch (error) {
                
            }
        case 'profile photo':
            try {
                const { update } = req.body;
            } catch (error) {

            }
        case 'cover photo':
            try {
                const { update } = req.body;
            } catch (error) {

            }
    }
}

export default updateHandler;