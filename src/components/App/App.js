import React from 'react'

import background from '../../assets/background.jpg'

const styles = {
  mainContainer: {
    backgroundImage: `url(${background})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}

const App = () => {
  return <div style={styles.mainContainer}>Cool app bro</div>
}

export default App
