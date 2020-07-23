import './styles.scss';
import Link from 'next/link';

const ThumbnailWithSass = ({caption,imageUrl='https://via.placeholder.com/210?text=?',href='',as=''})=>{
    console.log('href',href,as);
    return (
    <div className="thumbnail">
        <Link href={href} as={as}> 
            <a>
                <img src={imageUrl} alt={caption} className="thumbnail__image"/>
                <h4 className="thumbnail__caption">{caption}</h4>
            </a>
        </Link>
    </div>
    )
}
export default ThumbnailWithSass

//href -what next js is going to see
//as   -what user is going to see
//Using Link we are able to navigate on client side without full page reload 