import React from 'react';
import PostList from './PostList';
export default function blogPage() {
    const posts = [{id: 1, title: 'title1'}, {id: 2,title: 'title2'}, {id: 3,title: 'title3'}];
  return (
    <>
     <div>blogPage </div>
     < PostList posts = {posts}/>
    </>
   
  )
}
