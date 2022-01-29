import { useEffect, useState } from 'react';
import db from '../firebase'
import { collection , doc, getDocs, onSnapshot } from 'firebase/firestore'

function useGetPosts() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    
     const getPosts = async() => {
      try {
        const querySnapshot = await onSnapshot(collection(db, 'posts'), (snapshot) =>{
        setPosts(snapshot.docs)
        // (snapshot.docs.map(doc=>{
        //   setPosts({...doc.data(), id: doc.id})
        // }))
      }
      );
    } catch (e) {
      console.log(e);
    }
     }
     getPosts()
  }, []);

  return [posts];


}

export default useGetPosts;
