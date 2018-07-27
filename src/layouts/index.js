import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

    // <Header siteTitle={data.site.siteMetadata.title} />
    // <div
    //   style={{
    //     margin: '0 auto',
    //     maxWidth: 960,
    //     padding: '0px 1.0875rem 1.45rem',
    //     paddingTop: 0,
    //   }}
    // >}
    // </div>
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122993778-1"></script>
      <script>
        {`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122993778-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122993778-1');
</script>

`}
      </script>
  </Helmet>
  <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
