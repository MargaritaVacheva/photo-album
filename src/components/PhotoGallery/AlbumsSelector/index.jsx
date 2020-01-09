import React from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../../../store/actions'

const AlbumsSelector = ({ albumsIds, selectAlbum }) => {
    return (
        <div className='buttons-albums'>
            <span>Select album: </span>
            <div className="buttons-select">
            {albumsIds.map(id => {
                return <button onClick={() => selectAlbum(id)}
                key={id}>{id}</button>
            })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    albumsIds: state.albums.albumsIds
})

const mapDispatchToProps = (dispatch) => ({
    selectAlbum: (id) => dispatch(selectAlbum(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumsSelector);