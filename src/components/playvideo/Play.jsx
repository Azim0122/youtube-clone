import React, { useEffect, useState } from 'react';
import './Play.css';
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data';
import moment  from 'moment';
import { useParams } from 'react-router-dom';

function Play() {
  const {videoId} = useParams()
  const [follow, setFollow] = useState(false)

  const [channelData, setChannelData] = useState(null)
  const [apiData, setApiData] = useState(null)
  const [commentData, setCommentData] = useState([])
  const fetchOtherData =  async ()=>{
    const channelData_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res => res.json()).then(data =>setCommentData(data.items) )
  }
  useEffect(()=>{
    fetchOtherData()
  },[apiData])
  const fetchVideoData = async ()=>{
     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
     await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
  }
  useEffect (()=>{
   fetchVideoData()
  },[videoId])
  return (
    <div className='play-vieo'>
      {/* <video src={video1} controls autoPlay muted></video> */} 
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
          <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views • {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          <div>
            <span><i  onClick={() => setLiked(prev => !prev)} class="fa-solid fa-thumbs-up"></i>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><i class="fa-solid fa-thumbs-down"></i></span>
            <span><i class="fa-solid fa-share"></i>Share</span>
            <span><i class="fa-solid fa-download"></i>Save</span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
          </div>
          <button  className={follow ? 'unsubscribe' : 'unsubscribe subscribe'} onClick={() => setFollow(prev => !prev)}>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
          <hr />
          <h4>{apiData?value_converter(apiData.statistics.commentCount):102} comments</h4>
           {commentData.map((item)=>{
            return (
             <div className="comment">
             <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
           <div>
           <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>2 days ago</span></h3>  
           <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
           <div className="comment-action">
             <i  onClick={() => setLiked(prev => !prev)} class="fa-solid fa-thumbs-up"></i>
             <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
             <i class="fa-solid fa-thumbs-down"></i>
           </div>
           </div>
           </div>
            )
           })} 
    </div>
    </div>

  )
}

export default Play