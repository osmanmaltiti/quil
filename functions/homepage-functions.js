import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/firebase";

const useHomepage = () => {
    const handleSendQuil = async(quil, callback) => {
        const { user } = JSON.parse(localStorage.getItem("currentUser"));
        const input = {
            quil,
            uid: user.uid,
            name: user.fullname,
            displayname: user.displayname,
            timestamp: "12/01/2021",
            profile: user.profile,
        }
        const quilResponse = await axios.post('http://localhost:3000/api/quil', {input})
        console.log(quilResponse.data)
    }
    const handleSendImage = async(imageCaption, imageFile, callback) => {
        const { user } = JSON.parse(localStorage.getItem("currentUser"));
        let { uid } = user;
        try {
            const storageRef = ref(storage, `users/${uid}/posts/${imageFile.name}`);
            const uploadImage = uploadBytesResumable(storageRef, imageFile);
            uploadImage.on("state_changed", 
                (snapshot) => { }, 
                (error) => console.log(error.message), 
                () => {
                    getDownloadURL(uploadImage.snapshot.ref).then(async(url) => {
                        let quil = `${imageCaption} + Image + ${url}`;
                        const input = {
                            quil,
                            uid: user.uid,
                            name: user.fullname,
                            displayname: user.displayname,
                            timestamp: "12/01/2021",
                            profile: user.profile,
                        }
                        const quilResponse = await axios.post('http://localhost:3000/api/quil', {input})
                        console.log(quilResponse.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleSendVideo = async(videoCaption, videoFile, callback) => {
        const { user } = JSON.parse(localStorage.getItem("currentUser"));
        let { uid } = user;
        try {
            const storageRef = ref(storage, `users/${uid}/posts/${videoFile.name}`);
            const uploadVideo = uploadBytesResumable(storageRef, videoFile);
            uploadVideo.on("state_changed", 
                () => {}, 
                (error) => console.log(error), 
                () => {
                    getDownloadURL(uploadVideo.snapshot.ref).then(async(url) => {
                        let quil = `${videoCaption} + Video + ${url}`;
                        const input = {
                            quil,
                            uid: user.uid,
                            name: user.fullname,
                            displayname: user.displayname,
                            timestamp: "12/01/2021",
                            profile: user.profile,
                        }
                        const quilResponse = await axios.post('http://localhost:3000/api/quil', {input})
                        console.log(quilResponse.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleSendMic = async(micCaption, micFile, callback) => {
        const { user } = JSON.parse(localStorage.getItem("currentUser"));
        let { uid } = user;
        try {
            const storageRef = ref(storage, `users/${uid}/posts/${micFile.name}`);
            const uploadMic = uploadBytesResumable(storageRef, micFile);
            uploadMic.on("state_changed", 
                () => {},
                (error) => console.log(error), 
                () => {
                    getDownloadURL(uploadMic.snapshot.ref).then(async(url) => {
                        let quil = `${micCaption} + Audio + ${url}`;
                        const input = {
                            quil,
                            uid: user.uid,
                            name: user.fullname,
                            displayname: user.displayname,
                            timestamp: "12/01/2021",
                            profile: user.profile,
                        }
                        const quilResponse = await axios.post('http://localhost:3000/api/quil', {input})
                        console.log(quilResponse.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }

    return { handleSendImage, handleSendMic, handleSendQuil, handleSendVideo }
}

export default useHomepage;