import ThumbnailStyles from './styles'
const Thumbnail = ({caption,imageUrl})=>{
    return (
    <div className="thumbnail">
        <img src={imageUrl} alt={caption} className="thumbnail__image"/>
        <h4 className="thumbnail__caption">{caption}</h4>
    <style jsx>{ThumbnailStyles}</style>
    </div>
    )
}
export default Thumbnail