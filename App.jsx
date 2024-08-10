import React from 'react';
// 

const App = () => {
  return (
    <div className="App">
        
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navItems}>
          <a href="#chrome" style={styles.logoAndText}>
            <img 
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" 
              alt="Chrome" 
              // style={styles.navIcon} 
              style={{width:'136px',height:'36px'}}
            />
            <span style={styles.chromeText}>Chrome</span>
          </a>
          <a href="#a1innovations" style={styles.navLink}>A1 Innovations</a>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#safety" style={styles.navLink}>Safety</a>
          <a href="#bygoogle" style={styles.navLink}>By Google</a>
          <a href="#extensions" style={styles.navLink}>Extensions</a>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <img 
          src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" 
          alt="Chrome Browser" 
          style={styles.chromeImage} 
        />
        <div style={styles.heading}>
          <div>The Browser</div>
          <div>Built to be Yours</div>
        </div>
        <ul style={styles.menuBox}>
          <li style={styles.menuItem}><a href="#updates" style={styles.menuLink}>Updates</a></li>
          <li style={styles.menuItem}><a href="#ai" style={styles.menuLink}>AI</a></li>
          <li style={styles.menuItem}><a href="#yours" style={styles.menuLink}>Yours</a></li>
          <li style={styles.menuItem}><a href="#safe" style={styles.menuLink}>Safe</a></li>
          <li style={styles.menuItem}><a href="#fast" style={styles.menuLink}>Fast</a></li>
          <li style={styles.menuItem}><a href="#bygoogle" style={styles.menuLink}>By Google</a></li>
        </ul>
        {/* <p style={styles.smallText}>
          Need the Chrome installer? <button><a href="#download" style={styles.link}>Download here</a></button>
        </p> */}
        <p style={styles.smallText}>
           <button style={{height:'80px',borderRadius:'30px',backgroundColor:'blue'}}><a href="#download" style={styles.link}>Download here</a></button>
        </p>
        <h1 style={styles.head}>The <span>FAST </span>
way to do <br /> things online</h1>
        <div style={styles.imageSlider}>
          {/* Add your slider component or images here */}
          <img src="https://www.google.com/chrome/static/images/dev-components/home-poster-2x.webp" alt="Slide 1" style={styles.sliderImage} />
          <img src="https://www.google.com/chrome/static/images/homepage/fast/energy-saver_tablet.webp
" alt="Slide 2" style={styles.sliderImage} />
          <img src="	https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_tablet.webp" alt="Slide 3" style={styles.sliderImage} />
        </div>

        <h1 style={styles.head}>Stay  <span> Safe </span> <br /> while you browse</h1>

        <div style={styles.maindiv}>
            <div style={styles.d1}>

<br />
              <h3 style={styles.d11}>PASSWORD MANAGER</h3>
              <h1 style={styles.d12}>Use strong passwords on every site.</h1>
              <img src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill.webp
" alt=""  style={styles.p1}/>

            </div>
            <div style={styles.d2}>

            <br />
              <h3 style={styles.d21}>SAFETY CHECK</h3>
              <h1 style={styles.d22}><span>Check your safety</span> <br />  <span>level in real time with </span><br /> <span>just one click.</span></h1>
              {/* <img src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill.webp
" alt=""  style={styles.p1}/> */}
            </div>
        </div>

        <h1 style={styles.head}>Make it <span>YOURS</span> and take <br /> it  with you</h1>
        <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp" alt="" style={styles.img1} />
        
      </div>
    </div>
  );
};

// Inline styles
const styles = {
    
    maindiv:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'800px',
        // backgroundColor:'red'

    },
    head:{
        fontSize:'70px'
    },
    d1:{

        height:'600px',
        backgroundColor:'blue',
        width:'600px',
        
        float:'left',
        marginRight:'70px',
        borderRadius:'20px'

        
    },
   
    d11:{

      color:'white',
      position:'relative',
      left:'-150px'
    },
    d12:{

      color:'white',
      position:'relative',
      // left:'-10px',
      fontSize:'40px'
    },
    d2:{

        height:'600px',
        backgroundColor:'green',
        width:'600px',
        justifyContent:'center',
        float:'left',
        borderRadius:'20px'

    },
    d21:{

      color:'white',
      position:'relative',
      left:'-150px'
    },
    d22:{

      color:'white',
      position:'relative',
      left:'-30px',
      fontSize:'50px'
    },
    d2:{

        height:'600px',
        backgroundColor:'lightgray',
        width:'600px',
        justifyContent:'center',
        float:'left',
        borderRadius:'20px'

    },
    img1:{

      width:'1200px',
      borderRadius:'20px'

    },
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  logoAndText: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#333',
    marginRight: '20px', // Space between this and other nav items
  },
  navIcon: {
    width: '', // Set the width to 134px
    height: '36px', // Set the height to 36px
    marginRight: '0', // Remove space between logo and text
  },
  chromeText: {
    fontSize: '1.375rem', // Increase font size
    lineHeight: '2rem', // Increase line height
    margin: '0', // Ensure no margin between the logo and text
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
  },
  mainContent: {
    textAlign: 'center',
    margin: '40px auto',
  },
  chromeImage: {
    width: '63px', // Rendered size width
    height: '63px', // Rendered size height
    aspectRatio: '1 / 1', // Aspect ratio of 1:1
    marginBottom: '20px',
  },
  heading: {
    fontFamily: '"Google Sans", Arial, sans-serif',
    fontWeight: 700,
    fontSize: '4.5rem',
    lineHeight: '5.25rem',
    letterSpacing: '-0.21875rem',
    margin: '20px 0',
  },
  menuBox: {
    display: 'inline-flex', // Display items horizontally and take only content width
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '50px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    listStyleType: 'none', // Removes bullets
    margin: '0',
    textAlign: 'center',
    unicodeBidi: 'isolate',
  },
  menuLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    padding: '10px 20px',
  },
  smallText: {
    fontSize: '40px',
    margin: '10px 0',
  },
  link: {
    color: '#ffffff',
    height:'1000px',
    textDecoration: 'none',
  },
  imageSlider: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    
  },
  sliderImage: {
    width: '800px',
    height:'500px',
    margin: '0 10px',
  },
};

export default App;