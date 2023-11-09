import Navbar from "./Navbar";
import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
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
  const [tags, setTags] = React.useState([]);

  // Method to delete tag from Array
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  // Method to Add tag into Array
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="py-2 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
          Proposal Page
        </h2>
        <p className="mb-4 font-light text-center text-gray-500 sm:text-xl">
        </p>
        <form
          className="w-1/1 mx-auto p-4 bg-white rounded shadow-md mt-10"
          method="post"
          onSubmit={handleSubmit}
        >
          <label>
            Proposal Title:
            <input
              className="border rounded px-3 py-2 mt-1 mb-2 w-full"
              name="title"
            />
          </label>
          <label>
            Description:
            <input
              className="border rounded px-3 py-2 mt-1 mb-2 w-full h-20 "
              name="description"
            />
          </label>
          <label>
            Required knowledge:
            <input
              className="border rounded px-3 py-2 mt-1 mb-2 w-full"
              name="knowledge"
            />
          </label>
          <label className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2">
              <label className="block">Level:</label>
              <select className="border rounded px-3 py-2 w-full" name="level">
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="w-1/3 px-2">
              <label className="block">CdS /programmes:</label>
              <input
                className="border rounded px-3 py-2 w-full"
                name="programmes"
              />
            </div>
            <div className="w-1/3 px-2">
              <label className="block">Groups:</label>
              <input
                className="border rounded px-3 py-2 w-full"
                name="groups"
              />
            </div>
            <div className="w-1/2 px-2">
              <label className="block">Type:</label>
              <input className="border rounded px-3 py-2 w-full" name="type" />
            </div>
            <div className="w-1/2 px-2">
              <label className="block">Deadline:</label>
              <input
                className="border rounded px-3 py-2 w-full"
                name="deadline"
                type="date"
              />
            </div>
          </label>
          <div className="w-full">
            <label className="block">Keywords:</label>
            <div className="border rounded px-3 py-2 mt-1 w-full">
              <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                inputFieldPosition="bottom"
                autocomplete
                allowDragDrop={false}
              />
            </div>
          </div>
          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 mt-1 mb-2 rounded"
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
