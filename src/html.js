import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

        <title>Pacodo</title>

        <meta name="description" content="Pacodo - Ngủ cũng có tiền" />
        <meta name="author" content="pixelcave" />
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content="Pacodo - Ngủ cũng có tiền" />
        <meta property="og:site_name" content="OneUI" />
        <meta property="og:description" content="Pacodo - Ngủ cũng có tiền" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        <link rel="shortcut icon" href="/assets/media/favicons/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/media/favicons/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/media/favicons/favicon-180x180.png" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" id="css-main" href="/assets/css/oneui.min.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        <script src="/assets/js/oneui.core.min.js"></script>
        <script src="/assets/js/oneui.app.min.js"></script>
        <script src="/assets/js/plugins/chart.js/Chart.bundle.min.js"></script>
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
