import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation></Navigation>
      <div id='home' className='Homepage'>
        <h1 className='Company-name'>
          C I C S
        </h1>
        <h2 className='Type-contractor'>
          General Contractor
        </h2>
      </div>
      <div id='about-us' className='About-us'>
        <h3 className='subtitle'>
          About Us
        </h3>
        <p>This is a place holder.</p>
        <p>This is a place holder.</p>
      </div>
      <div id='what-we-do' className='What-we-do'>
        <h3 className='subtitle'>
          What We Do
        </h3>
      </div>
      <div id='our-work' className='Our-work'>
        <h3 className='subtitle'>
          Our Work
        </h3>
      </div>
      <div id='meet-the-team' className='Meet-the-team'>
        <h3 className='subtitle'>
          Meet the Team
        </h3>
      </div>
      <div id='client' className='Client-testimonies'>
        <h3 className='subtitle'>
          Client Testimonials
        </h3>
      </div>
      <div id='contact' className='Contact-us'>
        <div className='english'>
          <h3 className='subtitle2'>
            Contact Us
          </h3>
        </div>
        <div className='spanish'>
          <h3 className='subtitle2'>
            Contact Us
          </h3>
        </div>
      </div>
    </div>
  )
}
