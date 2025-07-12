import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import bgImg from './assets/bg.png'
import Equipments from './components/Equipments/Equipments'
import Banner from './components/Banner/Banner'
import img1 from './assets/2.png';
import img2 from './assets/3.png';
import TabComb from './components/tab/TabComb'

const BannerData = {
  image: img1,
  title: 'The Important To Take Care Of Yourself',
  subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas delectus minima quis ut, facere voluptatibus, ad totam repudiandae, iste doloremque dolorum aliquid ea reprehenderit assumenda quasi voluptatem voluptates dolor.',
  link:'#'
}

const BannerData2 = {
  image: img2,
  title: 'The Important To Take Care Of Yourself',
  subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas delectus minima quis ut, facere voluptatibus, ad totam repudiandae, iste doloremque dolorum aliquid ea reprehenderit assumenda quasi voluptatem voluptates dolor.',
  link:'#'
}

const bgStyle ={
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundAttachment:"fixed"
}

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
      <Navbar />
      <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData}/>
      <TabComb />
      <Banner {...BannerData2}/>
    </div>
  )
}

export default App