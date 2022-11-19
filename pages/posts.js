import React from "react";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {useAuthState} from 'react-firebase-hooks/auth'

const Posts = () => {
  const [post, setPost] = useState({ description: "" });
  const [user, lading] = useAuthState(auth)

  const submitPost = async (e) => {
    e.preventDefault();
    //make new post
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      ...post,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    });
  };

  return (
    <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
      <form onSubmit={submitPost}>
        <h1 className='text-2xl font-bold'>Create a new post</h1>
        <div className='py-2'>
          <h3 className='text-lg font-medium py-2'>Description</h3>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className='bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm'
          ></textarea>
          <p
            className={`text-cyan-600 font-medium text-sm ${
              post.description.length > 300 ? "text-red-600" : ""
            }`}
          >
            {post.description.length}/300
          </p>
        </div>
        <button
          type='submit'
          className='w-full bg-cyan-600 font-medium text-white rounded-lg p-2 my-2 text-sm'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Posts;
