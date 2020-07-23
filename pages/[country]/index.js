import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ThumbnailWithSass from '../../components/ThumbnailWithSass';
const Home = ({shows,country,statusCode}) =>{
    if(statusCode){
      return (
        <div className="error-block">
            <strong>Page you are looking for does not exist.
            Please try http://localhost:3000/us</strong>
        </div>
      )
    }
  const renderShows = ()=>{
      return shows.map((showItem,index)=>{
          const { show } = showItem;
          const showId = show.id;
        return <li key={index}>
              <ThumbnailWithSass 
              caption={show.name} 
              imageUrl={(show.image &&show.image.medium)||undefined}
              href="/[country]/[showId]"
              as={`/${country}/${showId}}`} />
          </li>
      })
  }
  return (
    <div className="container"> 
      <ul className="tvshows">
        <Link href="/about">
          <a>About</a>
        </Link>
        {renderShows()}
      </ul>
    </div>
  )
}

//If we use getInitialProps , the code inside it will get executed before the component get 
//rendered on the browser.This will enable us to call TVSHOWS API on the server side and prevent
//calling the API on client side for fater initial page load.

//getInitialProps has by default access to a parameter called context

Home.getInitialProps = async (context) =>{
  try {
    const country = context.query.country || 'us';
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
    return {
        shows: response.data,
        country
    }
  }catch(error){
    return {
      statusCode:error.response ? error.response.status:500 
    }
  }
}
export default Home