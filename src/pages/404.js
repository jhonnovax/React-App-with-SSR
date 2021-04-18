import React from 'react';

export default function NotFound() {

  return (
    <main>
      <h1>Page not found</h1>
      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          padding: 15px;

          h1 {
            font-size: 3rem;
            font-weight: bolder;
            margin-top: 100px;
          }
        }  
      `}</style>
    </main>
  );
}