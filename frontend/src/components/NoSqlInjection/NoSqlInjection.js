import { useEffect, useState } from 'react';

const SqlInjection = () => {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [payload, setPayload] = useState('{\n  "username": "admin",\n  "password": "p455w0rd"\n}');
  const [submit, setSubmit] = useState(1);

  useEffect(() => {
    async function login() {
      const response = await fetch('/api/badlogin', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: payload
      });
      if (response.ok) {
        setMessage('You logged in!');
      } else {
        const result = await response.json();
        setError(result.message);
      }
    };
    setError('');
    setMessage('');
    if (submit !== 1) {
      login();
    }
  }, [submit]);

  return (
    <>
      <h1>NoSQL Injection</h1>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin</td>
            <td>p455w0rd</td>
          </tr>
          <tr>
            <td>user</td>
            <td>password123.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Normally, your client-side script would create a JSON payload to send
        to your API. You can do that, here. Try out different passwords to make
        sure the login works properly.
      </p>
      <textarea value={payload} onChange={e => setPayload(e.target.value)} className="u-full-width" style={{height: '7em', fontFamily: 'monospace', fontSize: '14pt'}}></textarea>
      <div className="row">
        <button onClick={() => setSubmit(Math.random())} className="button-primary">Send login</button>
      </div>
      { !message ? '' :
        <div className="row success">
          {message}
        </div>
      }
      { !error ? '' :
        <div className="row error">
          {error}
        </div>
      }
      <p>
        Once you've done that, try changing the value for the payload to the following:
      </p>
      <pre>{`{
  "username": "admin",
  "password": { "$ne" : "" }
}`}</pre>
      <p>That logs in because it sets password to a <em>not equal clause</em>.</p>
    </>
  );
};

export default SqlInjection;
