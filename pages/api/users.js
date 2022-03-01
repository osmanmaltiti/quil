import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./server');
const jwt = require('jsonwebtoken');

const userHandler = (req, res) => {
    const users = JSON.parse(localStorage.getItem('users'));
   
    const { value, type } = req.body
    switch(type){
        case 'login':
            const { email, password } = value;
            const user = users.find(item => item.email == email);
            if(!user){
                res.status(201).send(`User with email ${email} not found`);
            } else {
                if(user.password === password){
                    jwt.sign({id: email}, 'quiljwtaccesstoken', { expiresIn: '5min'}, (err, accessToken) => {
                        err ? res.status(404).send('failed to create token') :
                        
                        jwt.sign({id: email}, 'quiljwtrefreshtoken', { expiresIn: '1d'}, (err, refreshToken) => {
                            err ? res.status(404).send('failed to create token') :
                            res.status(201).json({isAuthenticated: true, accessToken, refreshToken})
                        });
                    });
                } else {
                    res.status(201).send('Username or Password Incorrect')
                }
            }
            break;

        case 'signup':
                if(users){
                    localStorage.setItem('users', JSON.stringify([...users, value]));
                    res.status(200).send('Registration success');

                } else {
                    localStorage.setItem('users', JSON.stringify([value]));
                    res.status(200).send('Registration success');
                }
    }
}

export default userHandler;