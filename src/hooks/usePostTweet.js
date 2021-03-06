import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';

function usePostTweet(tweet, setTweet) {
  const submitNewTweet = async (e) => {
    try {
      e.preventDefault();
      const newPost = await addDoc(collection(db, 'posts'), {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWK_Pz64mX0CrnlzUC6tQiS1qfRoG3jd0gg&usqp=CAU',
        displayName: 'Lionel Messi',
        image: tweet.image,
        text: tweet.text,
        username: 'LeoMessiOK',
        verified: true,
        createdAt: serverTimestamp(),
      });
      console.log(newPost);
      setTweet({ text: '', image: '' })
    } catch (e) {
      console.log(e);
    }
  };

  return [submitNewTweet];
}

export default usePostTweet;
