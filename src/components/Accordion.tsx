import React, { useState } from 'react';

type AccordionProps = {
  items: {title: string, content: string}[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index: any) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return <React.Fragment key={item.title}>
      <div 
        className={`title ${active}`}
        onClick={() => onTitleClick(index)}
        >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
    );
};

export default Accordion;