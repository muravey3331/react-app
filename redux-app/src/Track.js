import React from 'react';
import {connect} from 'react-redux'

const Track = ({name, id}) => {
    const deleteTrack = (index) => {
        // console.log(index)
    };
    return (
        <li key={id}>{name}
            <button onClick={deleteTrack}>delete</button>
        </li>
    )

};
export default connect(
    mapStateToProps => ({}),
    dispatch => ({
        onDeleteTrack: id => {
                dispatch({type: 'DELETE_TRACK', payload: id})

        }
    })
)(Track)