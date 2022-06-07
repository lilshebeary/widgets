import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
  return (
      <div>
          {/* <Accordion  items={items} /> */}
          {/* <Search /> */}
          <Dropdown 
            onSelectedChange={setSelected}
            selected={selected} 
            options={options} 
        />
      </div>
    

  );
};

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=