import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import appinfoimg from "../components/images/appinfo.png";
import downloadnow from "../components/images/downloadnow.png";

function SharedLayout() {
  return (
    <div className="shared-container">
      <Navbar />
      <div className="appinfo">
        <img src={appinfoimg} width={"95%"} height={"100%"} alt="" />
        <div className="downloadnow">
          <img src={downloadnow} width={"100%"} height={"100%"} alt="" />
          <a
            href="https://apps.apple.com/"
            className="appstorelink"
            aria-label="Download Goal Radar from the App Store"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Download from the App Store</span>
          </a>
          <a
            href="https://play.google.com/store"
            className="googleplaylink"
            aria-label="Download Goal Radar from Google Play"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Download from Google Play</span>
          </a>
          <a
            href="https://www.goalradar.com.tr/"
            className="downloadnowlink"
            aria-label="Open Goal Radar website"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Open Goal Radar website</span>
          </a>
        </div>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default SharedLayout;
