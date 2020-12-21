import {combineReducers} from 'redux'

const songsReducer=()=>{
    return [
        {title:'Everybody',duration:'2:05'},
        {title:'Rock On',duration:'4:10'},
        {title:'We will Rock You',duration:'3:50'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SELECT_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})