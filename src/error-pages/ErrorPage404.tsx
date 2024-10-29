import { Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
var error404Img = require('../assets/images/error404PageImg.jpg');

function ErrorPage403() {
  const navigate = useNavigate();

  return (
    <div className="page-wraper">
      <div className="page-content">
        <div className="section-full content-inner-3 bg-white ErrorPages">
          <div
            className="container"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 error-page text-center"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h2
                  className="dz_error text-secondry"
                  style={{
                    fontSize: '100px',
                    lineHeight: '180px',
                    textAlign: 'center',
                    color: 'grey',
                  }}
                >
                  404
                </h2>
                <img
                  src={error404Img}
                  width={'35%'}
                  style={{ margin: '0 auto', marginTop: '-7%' }}
                  alt="Error"
                />{' '}
                <br />
                <Button
                  className="site-button"
                  type="primary"
                  onClick={() => {
                    navigate('/vendor/login');
                  }}
                >
                  Back To Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage403;
