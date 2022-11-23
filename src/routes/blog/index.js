import React, { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar";
import { FirebaseDb } from "../../Components/db/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const Blog = function () {
  const [blogPosts, setBlogPosts] = useState([]);

  function calculateDate(secs) {
    const date = new Date(secs * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  async function getData() {
    const postsCollection = collection(FirebaseDb, "posts");
    try {
      const querySnapshot = await getDocs(postsCollection);
      setBlogPosts(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      console.log(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );

      // console.log(
      //   querySnapshot.docs.map((doc) => {
      //     console.log(doc.data());
      //   })[0]
      //);
      calculateDate(1669044446);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {post.tags.split(",").map((tag) => (
                        <a href="#" className="hover:underline">
                          {`#${tag} `}
                        </a>
                      ))}
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.content}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Roel Aufderehar</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                          Roel Aufderehar
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-16">
                          {calculateDate(post.created_at.seconds)}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
