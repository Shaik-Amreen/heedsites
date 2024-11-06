
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {

  var [isSticky, setSticky] = useState(false);

  var [form, setForm] = useState({ name: "", mail: "", message: "", mobile: "" })
  var [errors, setErrors] = useState(false)
  const [buttonStatus, setButtonStatus] = useState('Send')

  const handleScroll = () => {
    isSticky = window.scrollY > 0
    setSticky(isSticky);
  };

  useEffect(() => {
    setButtonStatus('Send')
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const submitForm = () => {

    setButtonStatus('Sending')
    if (form.message.length > 0) {
      axios.post('https://arikya.in/api/techloomMail', form)
        .then((response) => console.log(response),

          setButtonStatus("Sent")
        )
        .catch((error) => console.log(error));
    }
    else {
      setErrors(true);
      setButtonStatus('Send')
    }
  }


  return (
    <div className='body'>



      {
        isSticky && <div className="header">
          {/* <h5 style={{
            fontSize: "1.9rem",
            "fontWeight": "800"
          }}>HeedSites</h5> */}
          <img className='logo' src={require('./assets/techloomdark.png')} />

        </div>
      }






      <div className='background' style={{ textAlign: "center", color: "white" }}>
        <div className='content'>
          <div style={{ fontSize: "1.9rem" }}>
            <img className='logo' src={require('./assets/logo.png')} /><div>HeedSites</div></div>

          <div className='center'>
            <div>
              <div><h1 className='heading'>Enhance Your<br /> Online Presence</h1></div>
              <div className='sub-text'>Take your business to the next level with our expert web and mobile app development services.</div>
              <br></br>

              <button className='btn' style={{ backgroundColor: "#ACC8FF", padding: "0.7rem", fontSize: "1.3rem" }}>Get Started</button>
            </div>
          </div>
        </div>
      </div>


      <div className='sub-body'>


        <div className='sub-text1'>
          "Are you looking for top-notch web and app development services? Look no further than HeedSites. Our team of skilled developers is dedicated to creating innovative and user-friendly websites that will help your business stand out online. With a focus on quality and customer satisfaction, HeedSites is the partner you need to take your web presence to the next level."
        </div>



        <div className='services'>


          <h1 className='services-heading'>Services we provide</h1>

          <div className='row justify-content-center'>
            <div className='col-sm-12 col-lg-6 ' >
              <div className='image1 overlay' >
                <h5>Web Application </h5>
                <span>Expert development of scalable web applications to meet your specific business needs.</span>
              </div>
            </div>

            <div className='col-sm-12 col-lg-6' >
              <div className='image2 overlay'>
                <h5>Custom  Responsive Websites</h5>
                <span>Tailored web designs to represent your brand and engage your audience.</span>
              </div>
            </div>

            <div className='col-sm-12 col-lg-6' >
              <div className='image3 overlay'>
                <h5>Mobile App</h5>
                <span>Transforming concepts into captivating apps that redefine user experiences.</span>
              </div>
            </div>


          </div>



        </div>


        <div className='about'>

          <div className='row align-items-center'>
            <div className='col-sm-12 col-lg-6'>
              <h1 className='services-heading'>About us</h1><br></br>
              <span className='about-text'>HeedSites is start-up company . With a team of highly skilled professionals, we specialize in creating innovative and user-friendly websites and mobile apps that empower businesses to thrive in the digital world.
                <br></br><br></br>    At HeedSites, we believe in the power of technology to transform businesses. Our goal is to provide our clients with cutting-edge web and mobile solutions that not only meet their unique requirements but also exceed their expectations. With our expertise in web and app development, we help businesses establish a strong online presence and drive growth through effective digital strategies.<br /><br /><br /></span>
            </div>
            <div className='col-sm-12 col-lg-6'>
              <img src={require('./assets/Techloom.jpeg')} className="techloomImage" style={{ borderRadius: "13px" }} />
            </div>
          </div>


        </div>


        <div className='contact'>

          <div className='row align-items-center'>
            <div className='col-sm-12 col-lg-6'>
              <h1 style={{ fontWeight: "800", fontSize: "2.2rem" }}>Contact Us Today</h1>
              <span className='contact-text'>Fill out the form below to get in touch with us. We are here to answer any questions you may have and provide you with the best web development solutions for your business.<br /><br /></span>
            </div>
            <div className='col-sm-12 col-lg-6'>
              <div>
                <span>Name</span><br />
                <input onChange={(e) => { setForm({ ...form, name: e.target.value }) }} className='form-control shadow-none' /><br />
              </div>

              <div>
                <span>Email</span><br />
                <input onChange={(e) => { setForm({ ...form, mail: e.target.value }) }} className='form-control shadow-none' /><br />
              </div>

              <div>
                <span>Mobile No</span><br />
                <input onChange={(e) => { setForm({ ...form, mobile: e.target.value }) }} className='form-control shadow-none' /><br />
              </div>

              <div>
                <span>Message</span><br />
                <textarea onChange={(e) => { setErrors(false); setForm({ ...form, message: e.target.value }) }} className='form-control shadow-none' ></textarea>
                {errors && <span style={{ color: "crimson" }}>Please type the message </span>}
                <br />
              </div>


              <button className='btn btn-primary' onClick={submitForm} style={{ float: "right", width: "150px" }}>{buttonStatus}</button>

            </div>
          </div>


        </div>

        <div className='footer'>
          <img className='logo' src={require('./assets/logo.png')} /><div>HeedSites</div>
        </div>

      </div>
    </div>
  )
}

export default App