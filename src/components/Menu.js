import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Filter from './Filter';

//Navbar
function Menu({ onFilter }) {
  return (
    <Navbar variant="light" className="bg-danger bg-gradient d-flex justify-content-between px-5 sticky-top">
      <Navbar.Brand className="adlam">
        <Link style={{ textDecoration: 'none', color:'white'}} to="/">Go My Flix</Link>
      </Navbar.Brand>
      <Filter onFilter={onFilter} />
    </Navbar>
  );
}

export default Menu;
