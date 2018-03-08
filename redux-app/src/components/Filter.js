import React from 'react';
import { connect } from 'react-redux';

const Filter = ({ onFilterAll, onFilterActive, onFilterCompleted }) => {
    const handleFilterAll = () =>{
        onFilterAll()
    };
    const handleFilterActive = () =>{
        onFilterActive()
    };
    const handleFilterCompleted = () =>{
        onFilterCompleted();
    };

    return (
        <div>
            <button onClick={handleFilterAll}>all</button>
            <button onClick={handleFilterActive}>active</button>
            <button onClick={handleFilterCompleted}>completed</button>
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