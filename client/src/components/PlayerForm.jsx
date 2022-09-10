import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerForm = (props) => {
    const { name, position, handleChange, handleSubmit, value, isError } = props;
    return (
      <div className="container">
        <h1 className="display-4 text-center m-4">
          Add New Player
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group row m-2">
            <label className="col-sm-2 col-form-label text-primary h1">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={name}
              />
            </div>
          </div>
          <div className="form-group row m-2">
            <label className="col-sm-2 col-form-label text-primary h1">
              Preferred Position:
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                value={position}
                name="position"
                onChange={handleChange}
              >
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Goalkeeper">Goalkeeper</option>
              </select>
            </div>
          </div>
          {isError ? (
            <input
              className="btn btn-primary m-3"
              value={value}
              type="submit"
              disabled
            />
          ) : (
            <input className="btn btn-primary m-3" value={value} type="submit" />
          )}
          <Link to={`/`}>
            <h5 className="btn btn-secondary m-3">Cancel</h5>
          </Link>
        </form>
      </div>
    );
}
 
export default PlayerForm;