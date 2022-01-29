import { useEffect, useState } from 'react';
import db from '../firebase';
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';

function useGetPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await onSnapshot(
          q,
          (snapshot) => {
            setPosts(snapshot.docs);
            console.log(querySnapshot);
          }
        );
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, []);

  return [posts];
}

export default useGetPosts;
