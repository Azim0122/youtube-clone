import React, { useEffect, useState } from 'react'
import './Recomended.css'
import thubnail1 from '../../assets/thumbnail1.png'
import thubnail2 from '../../assets/thumbnail2.png'
import thubnail3 from '../../assets/thumbnail3.png'
import thubnail4 from '../../assets/thumbnail4.png'
import thubnail5 from '../../assets/thumbnail5.png'
import thubnail6 from '../../assets/thumbnail6.png'
import thubnail7 from '../../assets/thumbnail7.png'
import thubnail8 from '../../assets/thumbnail8.png'
import { value_converter } from '../../data'
import { API_KEY } from '../../data'
import { Link } from 'react-router-dom'
function Recomended({categoryId}) {
    const [apiData, setApiData] = useState([])

    const fetchData = async () =>{
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=RU&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='recomended'>
        {apiData.map((item, index)=>{
            return (
           
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{value_converter(item.statistics.viewCount)} views</p>
                </div>
             </Link>
            )

        })}
      
      
    </div>
  )
}

export default Recomended