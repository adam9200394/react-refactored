import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import imageUrl from "../static/main-bg.png";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (value, multiplier = 0.5) => {
    return -1 * (value - window.innerHeight / 2) * multiplier;
  };

  const imageStyle = {
    transform: `translate3d(0, ${parallax(scrollY)}px, 0)`,
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div>
      <motion.img
        src={imageUrl}
        alt="background"
        style={imageStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div style={{ height: "500vh" }}>
       <div className="lorem-1">
            <p className="txt">Id nisi est do duis. Ea dolore anim enim enim adipisicing aliqua quis reprehenderit anim Lorem. Laborum sint anim sit amet commodo qui est laborum adipisicing magna duis.</p>
       </div>
       <div className="lorem-1">
            <p className="txt">Cillum cupidatat est sit culpa irure. In enim officia ex aute aute aliqua cillum do ullamco proident culpa. Deserunt reprehenderit nulla eu aute minim. Elit anim anim pariatur qui esse velit labore anim voluptate cillum ex aute.</p>
       </div>
       <div className="lorem-1">
            <p className="txt">Lorem enim ut qui mollit anim. Duis reprehenderit fugiat dolore commodo occaecat enim anim quis laborum. Reprehenderit cillum eiusmod eu aliquip velit occaecat nostrud sunt excepteur exercitation Lorem sit et velit. Velit elit ex velit amet non aliquip velit esse et tempor. Lorem est mollit sunt do exercitation cillum aliqua esse id. Sit est commodo velit veniam adipisicing do ea ut et. Ad do et laboris esse dolor.</p>
       </div>
       <div className="lorem-1">
            <p className="txt">Esse veniam laboris do irure elit reprehenderit adipisicing. Sit et eu consequat cupidatat ullamco qui sit eiusmod deserunt laboris consectetur anim reprehenderit. Velit id cupidatat ea magna proident eiusmod dolor velit nisi eu et id magna. Labore id exercitation cillum aute anim cillum nulla deserunt ipsum ex sunt. In minim cupidatat excepteur est cillum. Proident reprehenderit pariatur do et pariatur id quis ad. Sit officia est sit nisi exercitation nostrud esse ut voluptate do eiusmod esse deserunt do.</p>
       </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
