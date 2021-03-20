import React, { useEffect, useState } from "react";
import "./style/app.css";

import Particles from "react-particles-js";
import config from "./particlesjs-config.json";

import Marquee from "./components/Marquee";
import PlayButton from "./components/PlayButton";
import Art from "./components/Art";
import Header from "./components/Header";
import Icon from "./components/Icon";
import { getAlbumArtData, getStreamData } from "./services/Icecast";
import { Images } from "./assets";
import Volume from "./components/Volume";

function App() {
  // Audio
  let audioCtx;
  let audio;
  let mediaSource;

  // Audio nodes
  let v_analyser_node;
  let v_filter_node;
  //let v_gain_node;

  let v_bufferLength;
  let v_array;

  const [settings, setsettings] = useState({
    src: "https://stream.nightride.fm/darksynth.ogg",
    metadata_url: "https://stream.nightride.fm/darksynth.ogg/status-json.xsl",
    dataUrl: "",
    cro: "anonymous",
  });

  const [isPlaying, setisPlaying] = useState(false);

  const [source, set_source] = useState({});
  const [art_data, set_art_data] = useState({});

  useEffect(() => {
    handleStreamMetadata();
    setInterval(handleStreamMetadata, 10000);
    return () => {};
  }, []);

  useEffect(() => {
    handleArt();
    return () => {};
  }, [source]);

  const handleStreamMetadata = () => {
    getStreamData(settings.metadata_url).then(
      (data) => {
        const { source } = data.icestats;
        set_source(source);
      },
      (error) => console.log(error)
    );
  };

  const handleArt = () => {
    if (source.title) {
      getAlbumArtData(source.title).then(
        (data) => {
          if (data.resultCount >= 1) {
            data.results[0].artWork=data.results[0].artworkUrl100.replace("100x100","250x250");
            set_art_data(data.results[0]);
          }
        },
        (error) => console.log(error)
      );
    }
  };

  const handlePlayPause = (status) => {
    if (status) {
      if (!audioCtx) handleAudio();
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleAudio = () => {
    audioCtx = new AudioContext();
    audio = new Audio();

    audio.src = settings.src;
    audio.crossOrigin = settings.cro;
    audio.volume = 1;

    mediaSource = audioCtx.createMediaElementSource(audio);

    v_analyser_node = audioCtx.createAnalyser();
    v_analyser_node.fftSize = 512;

    v_filter_node = audioCtx.createBiquadFilter();
    v_filter_node.type = "notch";

    //connections
    mediaSource.connect(v_analyser_node);
    v_analyser_node.connect(audioCtx.destination);

    //Visual
    v_bufferLength = v_analyser_node.frequencyBinCount;
    v_array = new Uint8Array(v_bufferLength);

    audio.onplay = function () {
      //toggleStop();
      //if (!current_meta.rendering) renderFrame();
      console.log("playin");
    };

    audio.onpause = function () {
      //togglePlay();
      console.log("pause");
    };
    console.log(audio);
  };

  const handleVolume = (val) =>{
    if(audio){
      audio.volume = val;
    }
  }


  return (
    <React.Fragment>
      <Particles params={config} />
      {/* Particles always on top */}
      <Header
        center={<h1>{source.server_name ? source.server_name : "Radio" }</h1>}
        right={<Icon text={source.listeners ? source.listeners : "?"} text_position="right" />}
      />
      <div className="container">
        <Art src={art_data.artWork ? art_data.artWork : Images.default_art }  />
        <Marquee songTitle={source.title} />
        <PlayButton status={isPlaying} onClick={handlePlayPause} />
        <Volume onChange={handleVolume} value={1} />
      </div>
    </React.Fragment>
  );
}

export default App;
