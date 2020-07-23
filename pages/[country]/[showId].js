import axios from 'axios';
import parse from 'html-react-parser'

const ShowDetails=({show = {},statusCode})=>{
    const {name,image,summary } = show;
    console.log('name',name,image);
    if(statusCode){
        return (
            <div className="error-block">
                <strong>Page you are looking for does not exist.
                Please try http://localhost:3000/us</strong>
            </div>
        )
    }
    return(
        <div className="show-details">
            <div className="show-details__poster"  style={{backgroundImage:`url(${image.original})`}}>
                
            </div>
            <h1>{name}</h1>
            {parse(summary)}
        </div>
    )
}

ShowDetails.getInitialProps = async ()=>{
    try {
        const response = await axios.get('https://api.tvmaze.com/shows/1?embed=cast');
        console.log('response',response)
        return {
            show: response.data
        }
    }catch(error){
        return {
            statusCode:error.response ? error.response.status:500 
        }
    };
}

export default ShowDetails