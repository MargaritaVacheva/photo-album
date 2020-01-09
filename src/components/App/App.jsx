import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Main from '../Main';
import { fetchPhotos } from '../../store/actions';

function App({ loadPhotos }) {
  useEffect(() => {
    loadPhotos();
  })

  return (
    <div className="App">
      <Main />
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loadPhotos: () => dispatch(fetchPhotos())
  }
}
export default connect(
  null,
  mapDispatchToProps
)(App);
