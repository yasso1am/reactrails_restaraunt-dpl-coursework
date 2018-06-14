import React from 'react';

  const NoMatch = ( { location: {pathname} } ) => (
    <h2> Sorry, trying to go to {pathname} is unavailable because it doesn't exist. We call this a 404 Error. </h2>

  )

export default NoMatch