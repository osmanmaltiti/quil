import axios from "axios"

const useHomepage = () => {
    const handleSendQuil = async(quil, callback) => {
        const quilResponse = await axios.post('http://localhost:3000/api/quil', {quil})
        console.log(quilResponse.data)
    }
    const handleSendImage = async(imageCaption, imageFile, callback) => {
        console.log(imageCaption)
        console.log(imageFile)
    }
    const handleSendVideo = async(videoCaption, videoFile, callback) => {
        console.log(videoCaption)
        console.log(videoFile)
    }
    const handleSendMic = async(micCaption, micFile, callback) => {
        console.log(micCaption)
        console.log(micFile)
    }

    return { handleSendImage, handleSendMic, handleSendQuil, handleSendVideo }
}

export default useHomepage;