import Backtotop from "../backtotop";

export function Footer() {
  return (
    <>
      <footer className="eduvibe-footer-one edu-footer footer-style-default footer-style-default">
        <div className="copyright-area copyright-default">
          <div className="container" style={{ display: "flex" }}>
            <div className="row" style={{ marginLeft: "-50px" }}>
              <div className=" edu-footer-widget explore-widget">
                <div className="inner" style={{ marginTop: "15px" }}>
                  <ul
                    className="footer-link link-hover"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                      marginBottom: "0px",
                    }}
                  >
                    <li>
                      <a
                        style={{ margin: "0 5px" }}
                        href="#/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy{" "}
                      </a>
                    </li>
                    <li>
                      <a style={{ margin: "0 5px" }}> | </a>
                    </li>
                    <li>
                      <a
                        style={{ margin: "0 5px" }}
                        href="#/terms-and-conditions"
                        target="_blank"
                      >
                        Terms & Conditions{" "}
                      </a>
                    </li>
                    <li>
                      <a style={{ margin: "0 5px" }}> | </a>
                    </li>
                    <li>
                      <a
                        style={{ margin: "0 5px" }}
                        href="#/refund-policy"
                        target="_blank"
                      >
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="inner text-center">
                  <p style={{ margin: " 0 0 17px" }}>
                    Copyright 2022-2023 &nbsp;
                    <a href="#">cricketApplication &nbsp;</a>© All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Backtotop />
      </footer>
    </>
  );
}
