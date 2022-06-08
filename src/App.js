import React, { useState } from "react";
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from "./components/Dropdown";

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end JavaScript framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     },
// ]
const options = [
  {
    label: "Red",
    value: "red",
    // background: '#E34A71'
  },
  {
    label: "Green",
    value: "green",
    // background: '#10B981'
  },
  {
    label: "Blue",
    value: "blue",
    // background: '#0EA5E9'
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion  items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ?
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        /> : null
      }
    </div>
  );
};

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=
