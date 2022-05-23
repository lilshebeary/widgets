import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]

export default () => {
  return (
      <div>
          {/* <Accordion  items={items} /> */}
          <Search />
      </div>
    

  );
};

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programmer