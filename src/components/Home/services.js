import React, {Component} from 'react';

class Services extends Component{
    render(){
        return(
            <div id="services" className="services-area area-padding section md-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline services-head text-center">
            <h2>Nuestros servicios</h2>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="services-contents">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="about-move">
              <div className="services-details">
                <div className="single-services">
                  <a className="services-icon" href="/">
											<i className="fa fa-code"></i>
										</a>
                  <h4>Mejorando código</h4>
                  <p>
                    Vamos mejorando nuestro código, para dar mejor experciencia tanto a nuestros cliente como a los usuarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="about-move">
              <div className="services-details">
                <div className="single-services">
                  <a className="services-icon" href="/">
											<i className="fa fa-camera-retro"></i>
										</a>
                  <h4>Diseño más creativo</h4>
                  <p>
                    Dar diseños donde nuestro cliente se sienta orgulloso de mostrar su página.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className=" about-move">
              <div className="services-details">
                <div className="single-services">
                  <a className="services-icon" href="/">
											<i className="fa fa-cubes	"></i>
										</a>
                  <h4>Mejor presentación</h4>
                  <p>
                    Vamos tomando experiencida cada día para dar mejores resultados 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

export default Services;