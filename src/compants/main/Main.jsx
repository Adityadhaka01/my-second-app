
import "./Main.css";

 function Main () {
  return (
    <>
    <div className="sidebar">
      <div className="top-section">
        <h2>Your Library</h2>
        <button className="create-btn">+ Create</button>
      </div>

      <div className="playlist-card">
        <h3>Create your first playlist</h3>
        <p>It's easy, we'll help you</p>
        <button className="playlist-btn">Create playlist</button>
      </div>

      <div className="footer-links">
        <a href="#">Legal</a>
        <a href="#">Safety & Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
        <a href="#" className="cookies">Cookies</a>
      </div>

      <div className="language-btn">
        🌐 English
      </div>
    </div>
    </>
  );
};

export default Main;

