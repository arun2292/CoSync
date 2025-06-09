// import React from 'react'
// import "../App.css"
// import { Link, useNavigate } from 'react-router-dom'
// export default function LandingPage(){


//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>Linkup through Video Call</h2>
//                 </div>
//                 <div className='navlist'>
//                     <h3 onClick={() => {
//                         //router("/GuestMode")
//                     }}>Join as Guest</h3>
//                     <h3 onClick={() => {
//                        // router("/auth")

//                     }}>Register</h3>
//                     <div onClick={() => {
//                        // router("/auth")

//                     }} role='button'>
//                         <h3>Login</h3>
//                     </div>
//                 </div>
//             </nav>


//             <div className="landingMainContainer">
//                 <div>
//                     <h2><span style={{ color: "#396aff" }}>Connect</span> with your loved Ones</h2>

//                     <p>Cover a distance by Linkup</p>
//                     <div role='button'>
//                         <Link to={"/auth"}><h5>Get Started</h5></Link>
//                     </div>
//                 </div>
//                 {/* <div className='border-radius:90%'>

//                     <img src="/pexels-ketut-subiyanto-4246228.jpg" alt="" />

//                 </div> */}
//                 <div
//   className="rounded-full overflow-hidden"
//   style={{
//     WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
//     maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
//   }}
// >
//   <img
//     src="/mobile.png"
//     alt="Profile"
//     className="w-full h-auto object-cover"
//   />
// </div>

//             </div>



//         </div>
//     )
// }



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="navHeader">
          <h1>CoSync</h1>
        </div>
        <div className="navList">
          {/* <h3 onClick={() => router("/guest")}>Join as Guest</h3> */}
          <h3 onClick={() => router("/auth")}>Register</h3>
          {/* <div onClick={() => router("/auth")} role="button"> */}
            <h3 onClick={() => router("/auth")}>Login</h3>
          {/* </div> */}
        </div>
      </nav>

      {/* MAIN SECTION */}
      <div className="landingMain">
        <div className="textContent">
          <h2>
            <span className="primary">Connect</span> with your loved Ones through videocall
          </h2>
          <p class="big-font">Bridge distances and make every conversation count.</p><br></br>
          <Link to="/auth" className="getStartedBtn">
            Get Started
          </Link>
          <div><br></br></div>
          <div className="ctaButtons">
{/* //                         <Link to="/auth"><button>Get Started</button></Link> */}
                        {/* <Link to="/guestmode"><button className="outline">Try as Guest</button></Link> */}
                    </div> 
        </div>
        

        {/* IMAGE WITH BLEND */}
        <div className="imageWrapper">
          <img
            src="/front(1).jpg"
            alt="Video Call"
            className="blendedImage"
          />
        </div>
      </div>
      {/* Footer */}
             <footer>
                 <p>© 2025 CoSync. All rights reserved.</p>
             </footer>
    </div>
    
  );
}


// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "../App.css"

// export default function LandingPage() {
//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             {/* Navbar */}
//             <nav className='navBar'>
//                 <div className='navHeader'>
//                     <h2>Linkup through Video Call</h2>
//                 </div>
//                 <div className='navlist'>
//                     <h3 onClick={() => router("/guest")}>Join as Guest</h3>
//                     <h3 onClick={() => router("/auth")}>Register</h3>
//                     <div onClick={() => router("/auth")} role='button'>
//                         <h3>Login</h3>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <div className="landingMainContainer">
//                 <div className='heroText'>
//                     <h1>Connect with <span style={{ color: "#396aff" }}>Loved Ones</span></h1>
//                     <p>Bridge distances and make every conversation count.</p>
//                     <div className="ctaButtons">
//                         <Link to="/auth"><button>Get Started</button></Link>
//                         <Link to="/guest"><button className="outline">Try as Guest</button></Link>
//                     </div>
//                 </div>

//                 <div className="heroImage">
//                     <img src="/pexels-ketut-subiyanto-4246228.jpg" alt="Video Chat" />
//                 </div>
//             </div>

//             {/* Features Section */}
//             <section className="features">
//                 <div className="featureBox">
//                     <img src="/secure-icon.png" alt="Secure" />
//                     <h4>End-to-End Encryption</h4>
//                 </div>
//                 <div className="featureBox">
//                     <img src="/no-signup-icon.png" alt="No Signup" />
//                     <h4>No Signup Needed</h4>
//                 </div>
//                 <div className="featureBox">
//                     <img src="/fast-icon.png" alt="Fast" />
//                     <h4>Instant Connection</h4>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer>
//                 <p>© 2025 LinkUp. All rights reserved.</p>
//             </footer>
//         </div>
//     )
// }

