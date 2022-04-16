import React, { Component } from "react";
import "./styleCert.css";

export default class certificates extends Component {
  constructor() {
    super();
    this.state = {
      certificates: [
        {
          id: "12",
          title: "Complete Vue.js 3",
          subtitle: "(Inc. Composition API, Vue Router, Vuex",
          img: "https://github.com/Michelle-Lefebvre/PORTFOLIO/blob/master/images/cert-vuejs3-composition-router-vuex.png?raw=true",
        },
        {
          id: "11",
          title: "Accessibility for Web Developers",
          subtitle: "",
          img: "https://github.com/Michelle-Lefebvre/PORTFOLIO/blob/master/images/cert-accessibility-web-developers-learning-path.png?raw=true",
        },
        {
          id: "10",
          title: "Build Responsive Real World Websites with CSS3",
          subtitle: "",
          img: "https://github.com/Michelle-Lefebvre/PORTFOLIO/blob/master/images/cert-build-responsive-websites.png?raw=true",
        },
        {
          id: "8",
          title: "Modern JavaScript",
          subtitle: "From the beginning",
          img: "https://github.com/Michelle-Lefebvre/PORTFOLIO/blob/master/images/certificate-modernjs.jpg?raw=true",
        },
        {
          id: "9",
          title: "Git Essentials:",
          subtitle: "Learn Git with Bitbucket and Sourcetree",
          img: "https://github.com/Michelle-Lefebvre/PORTFOLIO/blob/master/images/certificate-gitessentials.jpg.png?raw=true",
        },
      ],
    };
  }

  render() {
    return (
      <section>
        <h1>List of Certificates</h1>
        {this.state.certificates.map((certificate) => {
          return (
            <div className="certs" key={certificate.id}>
              <div className="left">
                <img src={certificate.img} alt={certificate.title}></img>
              </div>

              <div className="right">
                <h2>
                  {certificate.title} : <span> {certificate.subtitle} </span>
                </h2>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
