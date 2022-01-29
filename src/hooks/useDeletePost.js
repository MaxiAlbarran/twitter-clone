import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, query, where } from 'firebase/firestore';
import db from '../firebase';

function useDeletePost() {
  const deletePost = async (post) => {
    console.log(post)
    try {
      const deleted = await deleteDoc(doc(db, 'posts', `${post.id}`));
      console.log(deleted);
    } catch (e) {
      console.log(e);
    }
  };

  return deletePost;
}

export default useDeletePost;
