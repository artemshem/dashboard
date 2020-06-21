import React, { Component } from 'react';

class UserFilters extends Component<any, any> {

  render() {
    const { changeFilter } = this.props;

    return (
      <div className="filters">
        <div className="filter-block">
          <span className="filter-block__title">Gender</span>
          <select
            className="filter-block__select"
            onChange={(event) => changeFilter(event, 'gender')}
          >
            <option>No filter</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    )
  }
}

export default UserFilters;