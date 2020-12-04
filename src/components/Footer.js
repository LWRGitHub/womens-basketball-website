import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer class="container bg-secondary text-white rounded-top p-3">
        <NavLink to="/workcited">Works Cited</NavLink>
        <hr />
        <span>&copy;2020 Logan Reynolds & Jordan Torres</span>
    </footer>
)

export default Footer;