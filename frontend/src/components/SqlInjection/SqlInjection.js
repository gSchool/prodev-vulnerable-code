import { useEffect, useState } from 'react';

const SqlInjection = () => {
  const [malicious, setMalicious] = useState('\'; DROP TABLE fruits; SELECT \'')
  const [query, setQuery] = useState('apples');
  const [search, setSearch] = useState(1);
  const [queryResult, setQueryResult] = useState();
  const [error, setError] = useState('');
  const [useMalice, setUseMalice] = useState(false);

  useEffect(() => {
    async function ask() {
      const response = await fetch(`/api/fruits?name=${useMalice ? malicious : query}`);
      const result = await response.json();
      if (response.ok) {
        const value = JSON.parse(result);
        setQueryResult(`${value} ${query}`);
      } else {
        setError(result.message);
      }
      setUseMalice(false);
    }
    setQueryResult(undefined);
    setError('');
    ask();
  }, [search, useMalice]);

  return (
    <>
      <h1>SQL Injection</h1>
      <p>
        Let's try to mess with the database!
      </p>
      <p>
        Normally, this just returns a nice query.
      </p>
      <div className="row">
        <div className="six columns">
          <input className="u-full-width" type="text" value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div className="six columns">
          <button className="button-primary" onClick={() => setSearch(Math.random())}>Search</button>
        </div>
      </div>
      { queryResult === undefined ? '' :
        <p style={{fontWeight: 700}}>You have {queryResult}</p>
      }
      { !error ? '' :
        <p className="error">{error}</p>
      }
      <hr />
      <div className="row">
        <p>What happens when you get malicious?</p>
        <input type="text" className="u-full-width" value={malicious} onChange={e => setMalicious(e.target.value)} />
        <div>
          <button className="button-primary" onClick={() => setUseMalice(true)}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SqlInjection;
