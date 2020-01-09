import React from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../../../store/actions'

const AlbumsSelector = ({ albumsIds, chooseAlbum }) => {
    return (
        <div className='buttons-albums'>
            <span>Choose album: </span>
            {albumsIds.map(id => {
                return <button onClick={() => chooseAlbum(id)}
                    key={id}>{id}</button>
            })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    albumsIds: state.albums.albumsIds
})

const mapDispatchToProps = (dispatch) => ({
    chooseAlbum: (id) => dispatch(selectAlbum(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumsSelector);