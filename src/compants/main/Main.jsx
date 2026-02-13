
import "./Main.css";


const songs = [
  {
    title: "DtMF",
    artist: "Bad Bunny",
    image: "https://picsum.photos/200?1"
  },
  {
    title: "Dil Lagana Mana Tha",
    artist: "Krish Mondal, Devv Sadaana",
    image: "https://picsum.photos/200?2"
  },
  {
    title: "Samjhawan",
    artist: "Arijit Singh",
    image: "https://picsum.photos/200?3"
  },
  {
    title: "Khat",
    artist: "Navjot Ahuja",
    image: "https://picsum.photos/200?4"
  },
  {
    title: "Dopamine",
    artist: "Guru Randhawa",
    image: "https://picsum.photos/200?5"
  }
];
 function Main () {
  return (
    <>
    <div className="box">
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
    <section className="trending">
      <div className="section-header">
        <h2>Trending songs</h2>
        <a href="#">Show all</a>
      </div>

      <div className="song-row">
        {songs.map((song, index) => (
          <div className="card" key={index}>
            <img src={song.image} alt={song.title} />
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </section>
    

    </div>
    </>
  );
};

export default Main;

