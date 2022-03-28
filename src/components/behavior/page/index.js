import PropTypes from 'prop-types';
import Head from 'next/head';

        
  function Page({ title, description, og_image, children }){
      return (
        <>
          <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description}/>
            <meta property="og:image" content={og_image}/>
          </Head>
          { children }
        </>
      )
  }
  
  Page.defaultProps = {
  
  }
  Page.propTypes = {
  }
  export default Page
  