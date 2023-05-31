import React from 'react';
import PostTile from '../components/post-tile';

HomePage.getServerData = async () => {
  const fetch = require('node-fetch');
  const response = await fetch(`${process.env.API_URL}/posts`, { method: 'GET' });
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
};

export default function HomePage() {
  const posts = typeof window === 'undefined'
    ? []
    : window.initialProps?.posts || [];

  return (
    <main>
      <h1>Welcome to Home Page</h1>
      <section className="post-list">
        {posts.map(post => 
          <PostTile key={post.id} title={post.title} image={post.image} />
        )}
      </section>
      <style jsx>{`
        main {
          width: 100%;
          padding: 15px;

          h1 {
            margin-bottom: 10px;
          }

          .post-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 10px;
            row-gap: 10px;
          }
        }  
      `}</style>
    </main>
  );
}