import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  console.log({ selectedSong });
  if (selectedSong == null) {
    return <div>no song selected</div>;
  }
  return (
    <div>
      <h3>Song Detail:</h3>
      <p>{selectedSong.title}</p>
      <p>{selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
