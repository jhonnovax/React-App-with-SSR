import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <style jsx>{`
        header {
          background: rgb(250, 250, 251);
          box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
          padding: 15px;

          nav {
            
            :global(a) {
              padding: 0 5px;
            }
          }
        }
      `}</style>
    </header>
  );

}