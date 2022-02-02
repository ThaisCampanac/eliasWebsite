import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Service from '../components/Service'
import GalleryWall from '../components/Gallery-Wall'
import servicephoto from '../assets/service-asset.jpg'

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
        <div className='Services'>
          <Service photo={servicephoto} name="Service1"  description = "wowowowowowowowow"></Service>
          <Service photo={servicephoto} name="Service2"  description = "wowowowowowowowow"></Service>
          <Service photo={servicephoto} name="Service3"  description = "wowowowowowowowow"></Service>
        </div>
        <div className='Buttons'>
          <button className='small-button'>Need Residential Contractor Work?</button>
          <button className='small-button'>Need Electrical Contractor Work?</button>
          <button className='small-button'>Need Roofing Contractor Work?</button>
        </div>
      </div>
      <div id='our-work' className='Our-work'>
        <h3 className='subtitle'>
          Our Work
        </h3>
        <h4 className='subtitle2'>
          This is a showcase of all completed work done by the company
        </h4>
        <GalleryWall></GalleryWall>
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
