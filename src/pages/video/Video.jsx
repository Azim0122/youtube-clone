import React, { useState } from 'react'
import './Video.css'
import Play from '../../components/playvideo/Play'
import Recomended from '../../components/recomended/Recomended'
import { useParams } from 'react-router-dom'
function Video() {
  const {videoId, categoryId} = useParams()
  return (
    <div className='play-container'>
    <Play videoId={videoId} />
    <Recomended categoryId={categoryId} />
    </div>
  )
}

export default Video