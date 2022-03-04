import React from 'react'
import Hero from '../components/hero/Hero'
import Us from '../components/us/Us'
import Cta from '../components/cta/Cta'
import Gallery from '../components/gallery/Gallery'
import Cardreview from '../components/cardreview/Cardreview'
import Contact from '../components/contact/Contact'
import Prova from '../components/prova/prova'
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
