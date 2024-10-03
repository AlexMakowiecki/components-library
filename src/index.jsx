import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import testimonialImage from "/testimonial-image.jpeg"
import testimonialLogo from "/Logo.png"
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <div className="badges">
        <Badge color="red" type="square">Badge Nº1</Badge>
        <Badge color="yellow" type="pill">Badge Nº2</Badge>
        <Badge color="indigo">Badge Nº3</Badge>
      </div>
      <div className="banners">
        <Banner type="neutral" title="Update available">
          Update description is written here
        </Banner>
        <Banner type="warning" title="Warning!">
          Warning description is written here
        </Banner>
        <Banner type="error" title="Error">
          Error description is written here
        </Banner>
        <Banner type="success" title="Congratulations!">
          Success description is written here
        </Banner>
      </div>
      <div className="cards">
        <Card icon={<FaCloudUploadAlt />} iconBackgroundColor='#EE4444'>
          <div className="card__content">
            <h3 className="card__title">Easy Deployment</h3>
            <p className="card__text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
          </div>
        </Card>
      </div>
      <div className="testimonials">
        <Testimonial
          image={testimonialImage}
          logo={<img src={testimonialLogo} className="white-background pill default-padding"/>}
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis"
          name="Alex Makowiecki"
          role="Workstation, TCO"
        />
        <Testimonial
          logo={<img src={testimonialLogo}/>}
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis"
          name="Alex Makowiecki"
          role="Workstation, TCO"
        />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
