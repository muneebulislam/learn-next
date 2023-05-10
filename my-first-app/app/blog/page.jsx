import React from 'react';
import PostList from './PostList';
export default function blogPage() {
    const posts = [{id: 1, slug: 's1', title: 'title1'}, {id: 2, slug: 's2',title: 'title2'}, {id: 3, slug: 's3',title: 'title3'}];
  return (
    <>
     <div>blogPage</div>
     < PostList posts = {posts}/>
    </>
   
  )
}
