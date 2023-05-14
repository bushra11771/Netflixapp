import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../components/Requests'

function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='2' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='3' title='TopRated' fetchURL={requests.requestTopRated} />
      <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
} 

export default Home