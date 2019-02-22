import React from 'react';

const Footer = () => {
	return (
<footer classNameName="fixed-bottom ">

    <div classNameName="container-fluid text-center text-md-left">      
      <div className="row">

        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Notice</h5>
          <p>All inquiries are considered confidential</p>
        </div>                
        <div className="col-md-3 mb-md-0 mb-3">
          
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Hiring</a>
              </li>
            </ul>

          </div>
          
      </div>

    </div>
    
    <div className="footer-copyright text-center py-3">© 2018 Copyright: ex-Landmen
    </div>

  </footer>
		)
};
export default Footer;