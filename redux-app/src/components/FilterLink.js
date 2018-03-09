import React from 'react';
import {connect} from 'react-redux';

const FilterLink = ({onFilterLink, filter, text}) => {
    const handleFilterLink = (e) => {
        e.preventDefault();
        onFilterLink(filter);
    };
    return (<a href="#" onClick={handleFilterLink}>{text}</a>)
};

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterLink: (filter) => {
            dispatch({type: filter})
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);