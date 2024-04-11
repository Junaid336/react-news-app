import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getSearchResults } from "../../utils/api";
import { useSearchParamValues } from "../../hooks/useParamValues";

import NewsList from "../news/NewsList";
import Spinner from "../spinner/Spinner";




export default function SearchResults () {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useSearchParamValues();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
      ()=> {
        setIsLoading(true);
        
        getSearchResults(params)          
        .then( res => {
          setArticles(res.articles)
          setIsLoading(false)
        })
        .catch(e => console.log(e))
    }, [searchParams])

    if(isLoading)
      return <Spinner />

  
    return (
      <NewsList text="Search Results" articles={articles} />
    )
}