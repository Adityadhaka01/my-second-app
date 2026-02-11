import React from "react";
import "./Silder.css";

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

function Silder () {
  return (
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
  );
};

export default Silder;
