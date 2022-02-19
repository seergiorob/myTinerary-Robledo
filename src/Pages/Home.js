import React from 'react'
import Hero from '../components/hero/Hero'
import Us from '../components/us/Us'
import Cta from '../components/cta/Cta'
import Comments from '../components/reviews/Comments'
import Gallery from '../components/gallery/Gallery'


function Home() {
    return (
        <div>
            <Hero/>
            <Us/>
            <Cta/>
            <Comments/>
            <Gallery/>
        </div>
    )
}

export default Home
