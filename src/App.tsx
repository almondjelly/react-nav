import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'Yankee Doodle',
    content: 'Went to town riding on a pony',
  },
  {
    title: 'Rainbows',
    content: 'Were lemon drops and gumdrops',
  },
  {
    title: 'I like to',
    content: 'oat oat oat oples and banonos',
  },
];

const options = [
  {
    label: 'Tomato',
    value: 'red',
  },
  {
    label:'Grass',
    value: 'green',
  },
  {
    label:'Sky',
    value: 'blue',
  },
];
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}

export default () => {
  return (
    <div>
      <h1>Widgets</h1>
      {/* {showAccordion()} */}
      <Search />
      {/* <Translate /> */}
    </div>
  );
};
