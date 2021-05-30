import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Result {
  pageid: number,
  title: string,
  snippet: string,
}

const Search = () => {
  const [term, setTerm] = useState('metallica');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 400);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  function stripSpan(text: string): string {
    let textArr = text.split('<span class="searchmatch">');
    text = textArr.join('');
    textArr = text.split('</span>');
    text = textArr.join('');
    return text;
  }
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`} 
            target="_blank"
            rel="noreferrer"
            >
              Go
            </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {stripSpan(result.snippet)}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input 
            value={term}
            onChange={e => setTerm(e.target.value)}
            type="text"
            name="search"
            className="input" 
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;