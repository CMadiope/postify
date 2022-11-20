import React from "react";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Message from "../components/Message";

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  //check user sign in

  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("auth/login");
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  //get user data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>Your posts</h1>
      <div>
        {posts.map((post) => {
          return <Message {...post} key={post.id}></Message>;
        })}
      </div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;
