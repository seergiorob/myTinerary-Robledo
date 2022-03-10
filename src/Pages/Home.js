import React from 'react'
import Hero from '../components/hero/hero'
import Us from '../components/us/us'
import Cta from '../components/cta/cta'
import Gallery from '../components/gallery/gallery'
import Cardreview from '../components/cardreview/cardreview'
import Contact from '../components/contact/Contact'

function Home() {
    return (
        <div>
            <Hero/>
            <Cta/>
            <Us/>
            
            <Gallery/>
            
            <Contact/>
            <Cardreview/>
            {/* <Prova/> */}
        </div>
    )
}

export default Home
