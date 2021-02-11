
import React from 'react';
import './Nav.css';
import { Navbar, Nav, NavItem, } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "../Routes";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/product';
import { useEffect, useState } from "react";
import { CounterContextProvider } from "../context/counterContext";

export const Navv = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const count = useSelector((state) => state.coun.counter);
  let num = 0;
  const generateList = () => {
    Object.values(products).map(item => (
      ++num)
    )

    return (
      num
    )
  }

  return (
    <CounterContextProvider value={{ value, setValue }}>
      <Router>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="color mr-4">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="color mr-4">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/todo" className="color mr-4">to-do</Link>
            </NavItem>
            <NavItem>
              <Link to="/books" className="color mr-4">Books</Link>
            </NavItem>
            <NavItem>
              <Link to="/counter" className="color mr-4">Counter ({count})</Link>
            </NavItem>
            <NavItem>
              <Link to="/Products" className="color mr-4">Products ({generateList()})</Link>
            </NavItem>
            <NavItem>
              <Link to="/countercontext" className="color mr-4">Counter Using Context ({value})</Link>
            </NavItem>
          </Nav>
          <Link to="/login" className="color">login</Link>

        </Navbar>
        <Routes />
      </Router>
    </CounterContextProvider>
  )
}