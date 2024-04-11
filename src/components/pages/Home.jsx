import { useEffect, useState } from "react";

import { getLatestNews } from "../../utils/api";
import { getDataFromSessionStorage } from "../../utils/helper";

import Heading from "../Heading";
import NewsList from "../news/NewsList";
import Spinner from "../spinner/Spinner";
import Popular from "../news/Popular/Index";
import FeedSection from "../feed/FeedSection";

export default function Home() {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState(getDataFromSessionStorage('user'));

  useEffect(
    ()=> {
      setIsLoading(true)
      getLatestNews()
      .then( res => {
        setArticles(res.articles)
        setIsLoading(false)
      })
      .catch(e => console.log(e))  
  }, [])

  useEffect(()=>{
    const handleStorageChange = () => {
      setUserData(getDataFromSessionStorage('user'));
    }
    window.addEventListener('storage', handleStorageChange);
    return ()=>{
      window.removeEventListener('storage', handleStorageChange)
    }
  }, []);
 
  if(isLoading)
    return <Spinner />

  
    return (
      <>
        <div className="p-6 max-w-7xl mx-auto">
          <Popular />
        </div>
        {userData?.feedOptions && userData.feedOptions.length > 0  && (
          <div className="p-6 max-w-7xl mx-auto text-center space-y-4">
            <Heading text="Your Feed"/>
            {userData.feedOptions.map((section, index)=>(
              <FeedSection key={index} section={section}/>
            ))}
          </div>
        )}
        <NewsList text="Latest" articles={articles} />
      </>
    )
    
}