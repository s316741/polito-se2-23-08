import Navbar from "./Navbar";
import React from "react";
import { TagsInput } from "react-tag-input-component";
import "../App.css";

function handleSubmit(e) {
  console.log("test:", "button works");
}

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function InsertProposal() {
  const [selected, setSelected] = React.useState([]);

  return (
    <>
      <div className="py-2 px-4 mx-auto max-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
          Proposal Page
        </h2>
        <p className="mb-4 font-light text-center text-gray-500 fs-5"></p>
        <form
          className="container mt-5 p-4 bg-light rounded shadow mt-10"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Proposal Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter proposal title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control border rounded px-3 py-2 mt-1 mb-2"
              id="description"
              name="description"
              placeholder="Enter proposal description"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="knowledge" className="form-label">
              Required knowledge:
            </label>
            <input
              type="text"
              className="form-control border rounded px-3 py-2 mt-1 mb-2"
              id="knowledge"
              name="knowledge"
              placeholder="Enter required knowledge"
            />
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="level" className="form-label block">
                Level:
              </label>
              <select
                className="form-select border rounded px-3 py-2"
                id="level"
                name="level"
              >
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="programmes" className="form-label block">
                CdS /programmes:
              </label>
              <input
                type="text"
                className="form-control border rounded px-3 py-2"
                id="programmes"
                name="programmes"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="groups" className="form-label block">
                Groups:
              </label>
              <input
                type="text"
                className="form-control border rounded px-3 py-2"
                id="groups"
                name="groups"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="type" className="form-label block">
                Type:
              </label>
              <input
                type="text"
                className="form-control border rounded px-3 py-2"
                id="type"
                name="type"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="deadline" className="form-label block">
                Deadline:
              </label>
              <input
                type="date"
                className="form-control border rounded px-3 py-2"
                id="deadline"
                name="deadline"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="keywords" className="form-label block">
              Keywords:
            </label>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="fruits"
                placeHolder="enter fruits"
              />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              className="btn btn-success py-2 px-4 mt-1 mb-2 rounded"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InsertProposal;
