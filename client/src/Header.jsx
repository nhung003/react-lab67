import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <> 
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/" className="nav-link active" aria-current="page">List</Link>
  </li>
  <li className="nav-item">
    <Link to="/new" className="nav-link">Create</Link>
  </li>
  <li className="nav-item">
    <Link to="/edit" className="nav-link">Edit</Link>
  </li>
  <li className="nav-item">
    <Link to="/delete" className="nav-link">Delete</Link>
  </li>
  <li className="nav-item">
    <Link to="/add" className="nav-link" >Add</Link>
  </li>
</ul>
</>

  )

}
