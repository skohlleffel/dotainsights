const heroJpegReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_HERO_JPEG':
            return action.payload.heroJpeg
        default:
            return state;
    }
}
export default heroJpegReducer;