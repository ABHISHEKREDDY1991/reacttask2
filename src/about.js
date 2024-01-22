import React from 'react'

const About = () => {
  return (
    <div>
      <div class="container" id="about" style={{backgroundColor:''}}>
        <div class="row">
            <div class="col-md-6">
                <img src="https://tse4.mm.bing.net/th?id=OIP.SM32I1WedoZ75g0uq24OCQHaFj&pid=Api&P=0&h=180"
                    style={{width: '200px'}}  class="img-fluid"></img>
                <img src="https://tse3.mm.bing.net/th?id=OIP.4K5hithKDLkKv8K0SrfIXwHaIr&pid=Api&P=0&h=180"
                    style={{width: '200px', margin: '20px', paddingbottom: '30px'}}  class="img-fluid"/>
                <br></br>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fVWvVrnn6ktOs869zS11TwHaFj&pid=Api&P=0&h=180"
                    style={{width: '200px', margin: '60px'}} class="img-fluid"/>

            </div>
            <div class="col-md-6">
                <h2>About Our Mobile</h2>
                <p>
                A smartphone (often simply called a phone) is a mobile device that combines the functionality of a traditional mobile phone with advanced computing capabilities. It typically has a touchscreen interface, allowing users to access a wide range of applications and services, such as web browsing, email, social media, and multimedia playback. Smartphones also have built-in cameras, GPS navigation, and support for various communication methods, including voice calls, text messaging, and internet-based messaging apps.
                </p>
                <p>
                    In June 2000, IBM displayed a prototype for the WatchPad, a wristwatch that ran Linux. The original
                    version had only 6 hours of battery life, which was later extended to 12.It featured 8 MB of
                    memory and ran Linux 2.2.The device was later upgraded with an accelerometer, vibrating
                    mechanism, and fingerprint sensor. IBM began to collaborate with Citizen Watch Co. to create the
                    "WatchPad". The WatchPad 1.5 features aQVGA monochrome touch sensitive display and runs
                    Linux.It also features calendar software, Bluetooth, 8 MB of RAM and 16 MB of flash
                    memory.Citizen was hoping to market the watch to students and businessmen, with a retail
                    price of around $399. Epson Seiko introduced their Chrono-bit wristwatch in September 2000. The
                    Chrono-bit watches have a rotating bezel for data input, synchronize PIM data via a serial cable,
                    and can load custom watch faces.
                </p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default About;