import React from 'react';
import Header from './header';

export default function Layout(props) {

  return (
    <>         
      <Header>
      </Header>
      <main>
        {props.children}
      </main>
      <style jsx>{`
        main {
          margin: 0 auto;
          max-width: 900px;
          padding: 15px;
        }  
      `}</style>
    </> 
  );

}
