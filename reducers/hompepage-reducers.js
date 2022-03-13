export const buttonReducers = () => {
    const init = {
        quil: 'z-0', image: 'z-0', video: 'z-0', mic: 'z-0',
        quilState: false, imageState: false, 
        videoState: false, micState: false,
      }

    const reducer = (state, action) => {
        switch(action){
            case 'open':
                return {quil: 'open-quil', image: 'open-image', video: 'open-video', mic: 'open-mic'}
            case 'quil':
                return {...state, quilState: !state.quilState}
            case 'image':
                return {...state, imageState: !state.imageState}
            case 'video':
                return {...state, videoState: !state.videoState}
            case 'mic':
                return {...state, micState: !state.micState}
            case 'close':
                return init
            default:
                return state
        }
    }
    return [init, reducer]
} 

export const quilReducers = () => {
    const init = {
        quilText: '', 
        imageCaption: '', imageFile: null,
        videoCaption: '', videoFile: '',
        micCaption: '', micFile: ''
      }
      
    const reducer = (state, action) => {
        switch(action.type){
            case 'quilText':
                return {...state, quilText: action.payload}
            case 'imageFile':
                return {...state, imageFile: action.payload}
            case 'imageCaption':
                return {...state, imageCaption: action.payload}
            case 'videoCaption':
                return {...state, videoCaption: action.payload}
            case 'videoFile':
                return {...state, videoFile: action.payload}
            case 'micCaption':
                return {...state, micCaption: action.payload}
            case 'micFile':
                return {...state, micFile: action.payload}
            case 'close':
                return init
            default:
                return state
        }
    }
    return [init, reducer]
}