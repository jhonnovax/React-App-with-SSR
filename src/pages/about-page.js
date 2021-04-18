import React from 'react';

export default function AboutPage() {

  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page 
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
        normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
        lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
      <style jsx>{`
        main {
          margin: 0 auto;
          padding: 15px;
          max-width: 900px;

          h1 {
            font-size: 3.0rem;
            margin-bottom: 15px;
          }  

          p {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </main>
  );
}