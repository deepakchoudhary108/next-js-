import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="container">
        <h1>This is our home page.</h1>
        <h2 className="info-message"> Please visit US official  show page &nbsp;&nbsp;
        
        <Link href="/us">
          <a>US</a>
        </Link>
        </h2>
        <h3>Concepts Learned and Used are mentioned below:</h3>
        <ul>
          <li>Basic next js app setup</li>
          <li>Static Routing</li>
          <li>Dynamic Routing e.g [country]</li>
          <li>Link Route inside application without rerendering entire page</li>
          <li>getInitialProps:To avoid api call after component rendering .</li>
          <li>Use of SASS in next js: next-sass</li>
          <li>Custom Error handling</li>

        </ul>
    </div>
  )
}
