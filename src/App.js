import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    // ! You need to have the short circuit operator ( || ) so that if the "ShoppingList" doesn't exist, it would set it up as an empty list.
    // ! When would you have an empty list? When new user uses the application, he won't have "shoppingList" setup initially.
    // ! You will get an error because in the Content component, we are trying to filter nothing, not even an array.
    // ! So short circuit is important
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  // ! ***** useEffect runs asynchronously. It finish running just before the function done running
  // console.log("Before useEffect");
  // useEffect(() => console.log("inside useEffect"), []);
  // console.log("After useEffect");
  // ! ----------------------------------

  // ! You would never have a dependancy item inside the list if you are using useEffect and useState together like below. Otherwise, you will have an endless loop because setItems will update the items list and since items list is changing, it will trigger the useEffect. You will have endless loop
  // useEffect(
  //   () => setItems(JSON.parse(localStorage.getItem("shoppingList"))),
  //   []
  // );

  useEffect(
    () => localStorage.setItem("shoppingList", JSON.stringify(items)),
    [items]
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    setItems([...items, myNewItem]);
  };
  const handleCheckItem = (id) => {
    const itemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemList);
  };
  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckItem={handleCheckItem}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
