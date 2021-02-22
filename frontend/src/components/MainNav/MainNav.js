import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  const mainNavClassNames = show ? 'MainNav MainNav-show' : 'MainNav';
  const mainNavOverlayClassNames = show ? 'MainNav-overlay MainNav-overlay-show' : 'MainNav-overlay';

  return (
    <nav className={mainNavClassNames}>
      <dl className="MainNav-list">
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/">Overview</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          What's in this thing?
        </dd>
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/sql-injection">SQL Injection</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          Hack tables in a database.
        </dd>
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/nosql-injection">NoSQL Injection</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          Mess with Mongo queries.
        </dd>
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/reflected-xss">Reflected XSS Example</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          Run dangerous code.
        </dd>
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/stored-xss">Stored XSS Example</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          Get other people's information.
        </dd>
        <dt className="MainNav-list-item">
          <NavLink className="MainNav-link" to="/css-injection">CSS Injection</NavLink>
        </dt>
        <dd className="MainNav-list-item-description">
          CSS can still be dangerous!
        </dd>
      </dl>
      <div className="MainNav-drawer-handle">
        <button className="MainNav-drawer-handle-icon" onClick={toggleShow}>
          { show ? 'hide nav' : 'show nav' }
        </button>
      </div>
      <div className={mainNavOverlayClassNames} />
    </nav>
  );
};

export default MainNav;
