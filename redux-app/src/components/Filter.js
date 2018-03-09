import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink'


const Filter = () => {
    return (
        <div>
            Show: {' '}
            <FilterLink filter="SHOW_ALL" text="All"/><FilterLink/>{' '}
            <FilterLink filter="SHOW_ACTIVE" text="Active"/><FilterLink/>{' '}
            <FilterLink filter="SHOW_COMPLETED" text="Completed"/><FilterLink/>{' '}
        </div>
    )
};

const mapStateToProps = () => {
    return{}
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);