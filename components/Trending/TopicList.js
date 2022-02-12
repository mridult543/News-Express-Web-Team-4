import TopicCards from './TopicCards'
import axios from 'axios'
import { useEffect, useState } from 'react'

function TopicsList(){
    let newsContent=null;
    const api=process.env.NEXT_PUBLIC_API_KEY;
    const url=`https://newsdata.io/api/1/news?apikey=${api}&category=top&language=en`;
    const [news,setNews]= useState(null);

    useEffect(()=>{
        axios.get(url).then(response=>{
            setNews(response.data)
        })
    },url)
    if(news){
         newsContent = news.results.map(newsTopics => <TopicCards title={newsTopics.title} link={newsTopics.link} ></TopicCards>)
   }
   else 
   newsContent=<div></div>;
   return newsContent;
};

export default TopicsList
