import Footer from "../components/Footer"

import Hero from "../sections/Hero"
import TheApproach from "../sections/TheApproach"
import TheObsession from "../sections/TheObsession"
import TheDiscoverySet from "../sections/TheDiscoverySet"




function Home() {
  return (
    <main
      className="
        overflow-hidden
        bg-[var(--zen-void)]
      "
    >

      {/* Hero stays immediate */}
      <Hero />

      {/* Cinematic Section Reveals */}
      
        <TheApproach />
      
        <TheObsession />

        <TheDiscoverySet />  

    </main>
  )
}

export default Home
