import { useEffect, useState } from 'react';
import db from '../firebase'
import { collection , getDocs } from 'firebase/firestore'

function useGetPosts() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const getPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const documents = querySnapshot.docs;
        setPosts(documents);
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, []);

  return [posts];
}

export default useGetPosts;
