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
    label: 'Tomato Color',
    value: 'red',
  },
  {
    label:'A Shade of Grass',
    value: 'green',
  },
  {
    label:'Big Beautiful Sky',
    value: 'blue',
  },
];
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}




export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <h1>Widgets</h1>
      {/* {showAccordion()} */}
      {/* <Search /> */}
      <Dropdown 
        selected={selected}
        onSelectedChange={setSelected}
        options={options} 
      />
      {/* <Translate /> */}
    </div>
  );
};
