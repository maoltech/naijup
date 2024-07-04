"use client";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPost from "../components/Home/FeaturedPost";
import RecentPost from "../components/Home/RecentPost";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks/dispatch";
import { fetchPosts } from "../redux/slice/postSlice";
//import dynamic from 'next/dynamic';
export default function Home() {
  
  // const HomeCoverSection = dynamic(() => import("../components/Home/HomeCoverSection"));
  // const FeaturedPost = dynamic(() => import("../components/Home/FeaturedPost"));
  // const RecentPost = dynamic(() => import("../components/Home/RecentPost"));
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const post = useSelector((state: any) => state.post
  ); 
  const {posts, status, error} = post

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  if(status === 'succeeded'){
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={posts.results[0]} />
      <FeaturedPost blogs={posts.results} />
      <RecentPost blogs={posts} />
    </main>
  );
}

}
