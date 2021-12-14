import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles.css';

function App() {
  return (
  <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-home">
      <a className="navbar-brand" href="#">PIZZAMANIA</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto d-flex justify-content-between">
      <li className="nav-item active">
      <li className="nav-item">
		<a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
			  <a className="nav-link" href="#">About Pizza</a>
			</li>
     		 <li className="nav-item">
				<a className="nav-link" href="#">Pizza Types</a>
			  </li>  
      </li>
        </ul> 
      </div>
      </nav>

      <div className="container-fluid">
      <div className="row">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
				  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-content">
				  <div className="carousel-item active">
					<img src="./images/Pizza-main.jpg" className="d-block w-100" alt="Pizza"/>
				  </div>
				  <div className="carousel-item">
					<img src="./images/Pizza-main1.jpg" className="d-block w-100" alt="Pizza"/>
				  </div>
				  <div className="carousel-item">
					<img src="./images/Pizza-main1a.jpg" className="d-block w-100" alt="Pizza"/>
				  </div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="sr-only">Next</span>
				</a>
			  </div>
		  </div>
      </div>
      <div className="container about-pizza">
		  <div className="row">
      <h2 className="text-center" style={{margin:'auto', paddingBottom: '10px'}}>About Pizza</h2>  
      </div>
	  </div>

      		<div className="row">
						<div className="col-md-6">
						<img src="./images/Pizza-main2.jpg" width="100%" alt="about pizza" className="img-responsive"/>
						</div>
						<div className="col-md-6">
							<h3>Pizza is Awesome</h3>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
							</p>

							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
							</p>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.	
							</p>
						
							</div>
					</div>

          <div className="container" >
          <h3 className="text-center">Pizza Types</h3>
          <div className="row">
          <div className="div col-md-3">
						<img src="./images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" className="img-thumbnail" alt="Pepperoni"/>

						<h3>Pepperoni Pizza</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
							Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
							quis itaque, vero saepe deserunt amet eos eaque aperiam. 
							In delectus inventore voluptate ab?
						</p>
						</div> 
           
            <div className="div col-md-3">
							<img src="./images/heather-bar.jpg" className="img-thumbnail" alt="Cheese"/>

							<h3>Cheese Pizza</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
									Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
									quis itaque, vero saepe deserunt amet eos eaque aperiam. 
									In delectus inventore voluptate ab?
								</p>
				
						</div>

            <div className="div col-md-3">
							<img src="./images/lynda-hinton-77RJFb0IXnQ-unsplash.jpg" className="img-thumbnail" alt="Vegetable"/>

							<h3>Vegetable Pizza</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
									Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
									quis itaque, vero saepe deserunt amet eos eaque aperiam. 
									In delectus inventore voluptate ab?
								</p>
				
							</div>

              <div className="div col-md-3">
							<img src="./images/matteo-vistocco-V2gzuCVlRhc-unsplash.jpg" className="img-thumbnail" alt="Cheese"/>

							<h3>Meat Pizza</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
									Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
									quis itaque, vero saepe deserunt amet eos eaque aperiam. 
									In delectus inventore voluptate ab?
								</p>
			
							</div>

            </div>  
          </div>
          
          <div className="footer">
					<div className="container">
					<div className="row justify-content-center">
						<p className="text-center"> &copy; 2021 Pizzamania 
							All Rights Reserved
						</p>
					</div>
					</div>
				</div>
      
</div>
  	
);
}

export default App;
