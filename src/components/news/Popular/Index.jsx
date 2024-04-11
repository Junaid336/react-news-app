import { useEffect, useState } from "react";

import { getMostPopularNews } from "../../../utils/api";

import { Slider } from "./Slider";

const Popular = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    setLoading(true)
    getMostPopularNews()
    .then(res => {
        setArticles(res);
        setLoading(false);
    })
    .catch(e => console.log(e))
  },[]);

  if (loading) {
    return <h3>loading...</h3>
  }
  return (
    <Slider items={articles} />
    // <span>hel</span>
  )
}

export default Popular;