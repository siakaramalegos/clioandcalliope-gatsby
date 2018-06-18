import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/elements/Main';

// TODO: Add google analytics
// < !--Global site tag(gtag.js) - Google Analytics-- >
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108863144-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag() {dataLayer.push(arguments); }
//   gtag('js', new Date());
//   gtag('config', 'UA-108863144-1');
// </script>

// TODO: add other meta tags like twitter - see competitors heads

const HomeLayout = ({ children, title }) => (
  <div>
    <Helmet title={title} >
      <meta name="description" content="Do you need a custom website or mobile application? Clio + Calliope designs and builds clean, beautiful, and easy-to-use web and mobile apps. Let's create something together." />

      <meta property="og:image" content="http://clioandcalliope.com/static/share_image@3x.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <html lang="en" />

      <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700|Oswald:500" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </Helmet>
    <Hero />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)

HomeLayout.propTypes = {
  children: PropTypes.node,
}

export default HomeLayout
