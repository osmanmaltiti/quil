import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../firebase/firebase";
import { getRecommended } from "../redux/home-feed-slice";
import Card from "../components/card";

const useHomepage = () => {
    const dispatch = useDispatch();
    const quil = useSelector(state => state.feed.quil);

    const mapQuils = (uid, callback) => {
       return quil?.map(item => 
            <Card key = {item._id}
              quil = {item.quil}
              profile = {item.user.profile}
              name = {item.user.fullname}
              displayname = {item.user.displayname}
              likes = {item.likes.length}
              unlikes = {item.unlikes.length}
              comments = {item.comments.length}
              timestamp = {item.timestamp}
              like = {() => handleLike({qid: item._id, uid}, (log) => {
                callback(log)
              })}
              unlike = {() => handleUnlike({qid: item._id, uid}, (log) => {
                callback(log)
              })}
              comment = {() => handleComment({qid: item._id, likes: item.likes, uid})}
            />)
    }
    const handleSendQuil = async(quil, callback) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        let newQuil = `${quil} + Quil + ${null}`;
        const input = {
            quil: newQuil,
            uid: user.uid,
            name: user.fullname,
            displayname: user.displayname,
            timestamp: "12/01/2021",
            profile: user.profile,
        }
        const response = await axios.post('http://localhost:3000/api/quil', {input});
        callback(response.data)
    }
    const handleSendImage = async(imageCaption, imageFile, callback) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
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
                        const response = await axios.post('http://localhost:3000/api/quil', {input})
                        callback(response.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleSendVideo = async(videoCaption, videoFile, callback) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
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
                        const response = await axios.post('http://localhost:3000/api/quil', {input})
                        callback(response.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleSendMic = async(micCaption, micFile, callback) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
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
                        const response = await axios.post('http://localhost:3000/api/quil', {input})
                        callback(response.data)
                    });
                });
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const getRecommend = async() => {
        const response = await axios.get('http://localhost:3000/api/users/recommended');
        dispatch(getRecommended(response.data));
    }
    const handleLike = async(query, callback) => {
        const response = await axios.patch('http://localhost:5000/api/quil/like', {...query});
        response.data && callback(response.data);
    }
    const handleUnlike = async(query, callback) => {
        const response = await axios.patch('http://localhost:5000/api/quil/unlike', {...query});
        response.data && callback(response.data);
    }
    const handleComment = async(query, callback) => {
        console.log(query)
    }

    return { handleSendImage, handleSendMic, 
             handleSendQuil, mapQuils,
             handleSendVideo, getRecommend, 
             handleLike,
             handleUnlike, handleComment }
}

export default useHomepage;