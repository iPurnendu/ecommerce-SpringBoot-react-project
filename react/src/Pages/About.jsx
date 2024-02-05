import React from "react";

const About = () => {
    const contacts = [
     {
        name: "Purnendu Bhattacharjee",
        image: "https://i.postimg.cc/3Rn1K90Q/251a67c6-18f4-4935-ae3e-42d46c83956a.jpg",
        socialMedia: {
           linkedin: "https://www.linkedin.com/in/purnendubhattacharjee/",
         },
      },
      {
        name: "Yogesh Patel",
        image: "https://i.postimg.cc/cLSFBKSj/49d8ed9c-b936-4c1d-bf96-4fd2d3775226.jpg",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/yogesh-patel-8b426b229/",
        },
      },
      {
        name: "Shouvik Dey",
        image: "https://i.postimg.cc/rpL6V5wn/230940320107-Shouvik-Dey-KH.jpg",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/shouvik-dey-91841122a/",
        },
      },
      {
        name: "Aniket Tawade",
        image: "https://i.postimg.cc/PxgWfcfc/DSC-0087-1.jpg",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/aniket-tawade-2007b521b/",
        },
      },
      {
        name: "Anshul Massey",
        image: "https://i.postimg.cc/RZSc0w9M/f65a7a70-b8cf-4069-b66c-bc11840446af.jpg",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/anshul-d-massey-898747239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4w9KQW%2BjQg24F1Tfbi3lCQ%3D%3D",
        },
      },
    ];
  
    return (
        <div className="contact-page" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px' }}>
          <div className="aboutRamble" style={{ fontFamily: 'Space Mono', textAlign: 'center', maxWidth: '800px', margin: '50px auto' }}>
            <img src="https://i.postimg.cc/mkVgpznw/Tech-No01-1.jpg" alt="Tech Image" style={{ width: '450px', height: '120px', margin: 'auto' }} />
            <p style={{ fontSize: '18px', fontFamily: 'Space Mono'}}>
              Welcome to Variable, your tech haven for bespoke electronics! Dive into our e-commerce realm, a haven for enthusiasts seeking tailor-made computers and smartphones. Empowering your journey is our state-of-the-art chatbot, meticulously designed to navigate the intricacies of PC customization. Harness the power of RazerPay for seamless, tech-driven transactions, ensuring swift and secure payments. At Variable, we transcend traditional limits, bringing innovation to the forefront of your shopping experience. Immerse yourself in the future of electronics, where cutting-edge technology meets personalized craftsmanship. Unleash your tech desires with Variable—a realm where every click unlocks a world of limitless possibilities.
            </p>
          </div>
          <h1 style={{ textAlign: "center", marginTop: "-40px", width: '100%', fontSize: '28px', fontWeight: "bold" }}>Team Variable</h1>
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card" style={{ flex: '0 0 30%', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={contact.image}
                alt={contact.name}
                style={{ width: "100%", height: "200px", maxWidth: "200px", objectFit: "cover" }}
              />
              <h2 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>{contact.name}</h2>
              <div className="social-media-links" style={{ textAlign: "center", marginTop: "5px", marginBottom: "10px" }}>
                {contact.socialMedia.linkedin && (
                  <a
                    href={contact.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "grey",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      );
  };

export default About;