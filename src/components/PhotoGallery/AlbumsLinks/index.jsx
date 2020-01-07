import React from 'react';

const AlbumsLinks = ({ albumIds, handleChoosingAlbum}) => {
    return ( 
        <div className='buttons-albums'>
        <span>Choose album: </span>
        {albumIds.map(a => {
            return <button onClick={() => handleChoosingAlbum(a)}
            key={a}>{a}</button>
        })}
    </div>
     );
}
 
export default AlbumsLinks;