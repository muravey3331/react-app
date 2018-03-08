import React from 'react';
import { connect } from 'react-redux';

const Filter = ({ onFilterAll, onFilterActive, onFilterCompleted }) => {
    const handleFilterAll = (e) =>{
        e.preventDefault();
        onFilterAll()
    };
    const handleFilterActive = (e) =>{
        e.preventDefault();
        onFilterActive()
    };
    const handleFilterCompleted = (e) =>{
        e.preventDefault();
        onFilterCompleted();
    };

    return (
        <div>
            <a href="#" onClick={handleFilterAll}>all</a>
            <a href="#" onClick={handleFilterActive}>active</a>
            <a href="#" onClick={handleFilterCompleted}>completed</a>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterAll: () => {
            dispatch({type: "SHOW_ALL"})
        },
        onFilterActive: () => {
            dispatch({type: "SHOW_ACTIVE"})
        },
        onFilterCompleted: () => {
            dispatch({type: "SHOW_COMPLETED"})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);