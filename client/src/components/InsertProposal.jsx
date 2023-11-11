import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import "../App.css";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function InsertProposal() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    knowledge: "",
    level: "Bachelor",
    deadline: "",
  });

  const [combinedData, setCombinedData] = useState({
    ...formData,
    keywords: selectedKeywords,
  });

  useEffect(() => {
    setCombinedData({
      ...formData,
      keywords: selectedKeywords,
    });
  }, [formData, selectedKeywords]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the inputs are empty
    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      formData.knowledge.trim() === "" ||
      formData.level.trim() === "" ||
      formData.deadline.trim() === "" ||
      selectedKeywords.length === 0
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    console.log("Form submitted!", combinedData);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTagsChange = (tags) => {
    setSelectedKeywords(tags);
  };

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
              value={formData.title}
              onChange={handleInputChange}
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
              value={formData.description}
              onChange={handleInputChange}
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
              value={formData.knowledge}
              onChange={handleInputChange}
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
                value={formData.level}
                onChange={handleInputChange}
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
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="keywords" className="form-label block">
              Keywords:
            </label>
            <TagsInput
              value={selectedKeywords}
              onChange={handleTagsChange}
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
