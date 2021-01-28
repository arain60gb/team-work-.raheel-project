import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="team-work-projct">
        <div className="container exeed-clint-details pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="">Image here</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Exceed client expectations</h2>
              <p className="mt-4">Oversee and manage multiple projects from one central hub so you can track client work, meet deadlines, and interact with stakeholders without needing to switch between tools.</p>
              <div className="row mt-5">
                <div className="col-lg-6 col-sm-6">
                  <h4>Deliver more projects with greater efficiency</h4>
                  <p className="mt-4">Eliminate manual reports and see how projects are progressing at a glance. Easily identify bottlenecks, automate client approval processes, and provide updates in real time.</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <h4>Easily manage client requests and feedback</h4>
                  <p className="mt-4">With everything you need in one place, you’ll never have to search for feedback, files or next steps again. And with your full project history at your fingertips, you can quickly bring clients up to speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* first section  */}
        <div className="company-growth-detail pb-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>Grow your company’s reputation for <span className="excellence-report">excellence</span></h2>
                <h4 className="mt-4">Automate your admin</h4>
                <p className="mt-4">Easily manage all the admin that goes with client-facing projects with time tracking on tasks, billing and invoice management, so you can free yourself up to focus on more important work</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12"><h1>Image here</h1></div>
            </div>
          </div>
        </div> 
      </div>
      {/* second-secton */}
      <div className="team-work-info">
        <div className="container">
        <span className="top-commas">,,</span>
          <h4 className="team-work-project-details">Before Teamwork, we were limited to running about 30 active projects a week. Now our average is 55.</h4>
          <img src="" alt='' />
          <h4>Colum Buckley, COO</h4>
          <span className="excellence-report">Strencom</span>
          <div className="need-team-work-details text-center">
            <h3>You don’t need software. You need Teamwork. No matter how many projects you’re managing, Teamwork enables your team to deliver outstanding results.</h3>
            <button type="button" class="btn btn-outline-primary mt-5 mb-5">Primary</button>
          </div>
        </div>
      </div>
      {/* third-scetion */}
      <div className="team-work-resources">
        <div className="container team-work-impact-section">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 first-part-resources">
              <h1>Image Here</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 second-part-resources pt-5">
              <a href="">RESOURCES</a>
              <h4 className="mt-4">The Business Impact of The Teamwork</h4>
              <p className="mt-4">Find out how Teamwork customers enjoy a 437% ROI when using Teamwork to manage their work according to The Total Economic Impact™ of Teamwork study conducted by Forrester Consulting.</p>
              <button type="button" class="btn btn-outline-primary mt-5 mb-5">Get The Report</button>
            </div>
          </div>
        </div>
        <div className="container team-performce-section">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center first-part-resources">
              <h3>Great teams run on Teamwork</h3>
              <p>Learn how your team can find success with Teamwork</p>
              <h1>Image Here</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  second-part-resources ">
              <div className="team-product-info">
              <a href="">RESOURCES</a>
              <p>Easily manage and execute on product requirements from concept to completion with Teamwork.</p>
              </div>
              <div className="team-product-info">
              <a href="">Marhetig Agency</a>
              <p>Flexible work management software that gives your agency everything they need to deliver exceptional projects and delight your clients.</p>
              </div>
              <div className="team-product-info">
              <a href="">Supporrts Teams</a>
              <p>Empower your team to build exceptional customer relationships and deliver first class support with Teamwork Desk.</p>
              </div>
              <div className="team-product-info">
              <a href="">Professional Services Teams</a>
              <p> Deliver the high performance outcomes that matter to your clients with Teamwork.</p>
              </div>
              <div className="team-product-info">
              <a href="">Teamwork for Enterprices</a>
              <p>Giving teams the power to scale high performance with enterprise-level security, training and support.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* fourth-section */}
     
    </div>
  );
}

export default App;
