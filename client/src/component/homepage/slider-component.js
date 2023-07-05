import React, { useState, useEffect } from "react";

const SlideshowComponent = (props) => {
  const videos = ["/media/people.mp4", "/media/heart.mp4"];
  let { currentIndex, setCurrentIndex } = props;
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const decreaseTime = () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    };

    const interval = setInterval(decreaseTime, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="slide">
      {currentIndex == 0 ? (
        <div className="subject">
          {" "}
          <video src={videos[currentIndex]} autoPlay controls={false} />
          <div className="black"></div>
          <div className="content">
            <div className="profilepicture">
              <img src="/media/people.avif" alt="" />
            </div>
            <h1>Long Neckie Vibes on the Go by Nyla Hayes</h1>
            <span className="creator">
              By AudioGalleries <span className="material-icons">verified</span>
            </span>
            <span className="prize">Open edition • 0.019ETH</span>
            <div className="bottom">
              <div className="reciprocal">
                <div className="day">
                  <span className="num">{days}</span>
                  <span>day</span>
                </div>
                <div className="hr">
                  <span className="num">{hours}</span>
                  <span>hrs</span>
                </div>
                <div className="min">
                  <span className="num">{minutes}</span>
                  <span>mins</span>
                </div>
                <div className="sec">
                  <span className="num">{seconds}</span>
                  <span>secs</span>
                </div>
              </div>
              <button>
                <span>View Drop</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="subject">
          {" "}
          <video src={videos[currentIndex]} autoPlay controls={false} />
          <div className="black"></div>
          <div className="content">
            <div className="profilepicture">
              <img src="/media/heart.avif" alt="" />
            </div>
            <h1>GORJS DAO: Dream Vortex</h1>
            <span className="creator">
              By GORJSBYNYXPMU <span className="material-icons">verified</span>
            </span>
            <span className="prize">Open edition • 0.019ETH</span>
            <div className="bottom">
              <div className="reciprocal">
                <div className="day">
                  <span className="num">{days}</span>
                  <span>day</span>
                </div>
                <div className="hr">
                  <span className="num">{hours}</span>
                  <span>hrs</span>
                </div>
                <div className="min">
                  <span className="num">{minutes}</span>
                  <span>mins</span>
                </div>
                <div className="sec">
                  <span className="num">{seconds}</span>
                  <span>secs</span>
                </div>
              </div>
              <button>
                <span>View Drop</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideshowComponent;
