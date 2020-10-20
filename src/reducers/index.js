import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Barbie girl",
      duration: "4:66",
    },
    {
      title: "macarena",
      duration: "5:00",
    },
    {
      title: "all star",
      duration: "6:00",
    },
    {
      title: "I want it all that ",
      duration: "7:00",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
