import React from "react";
import { FaPlus } from "react-icons/fa";
// ! useRef is being used so that after adding an item by clicking on the "+" button, the focus should shift BACK to the input field! Good UI technique
import { useRef } from "react";

// ! Form in React called Controlled Input/ Controlled Component
// * onSubmit={handleSubmit} handleSubmit will implicitly get the perimeter e. Under the hood, onSubmit is doing this
// * onSubmit={(e) => handleSubmit(e)}
// * We need the e value to prevent default setting for javascript so that the page doesn't refresh and losing all the information
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {/* type="submit". Notice no function is being called here it is because onSubmit takes care of it*/}
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
