import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div>
                <div style={{background: "#f1f1f1 none repeat scroll 0 0", padding: "15px 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="copyright text-center">
                                    <p>
                                        © Copyright <strong>Geekcode</strong>. All Rights Reserved
                                    </p>
                                </div>
                                <div style={{paddingTop: "5px",textAlign: "center"}}>
                                    Geekcode.com.mx                              
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="back-to-top" style={{display: "block"}}></div>
            </div>
        )
    }
}

export default Footer;