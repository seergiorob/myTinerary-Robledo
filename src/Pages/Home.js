import React from 'react'
import Hero from '../components/hero/Hero'
import Us from '../components/us/Us'
import Cta from '../components/cta/Cta'
import Gallery from '../components/gallery/Gallery'
import Cardreview from '../components/cardreview/Cardreview'

function Home() {
    return (
        <div>
            <Hero/>
            <Us/>
            <Cta/>
            <Cardreview/>
            <Gallery/>
        </div>
    )
}

export default Home
