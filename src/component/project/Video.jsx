import React, { useEffect, useRef, useState } from 'react';
import { Skeleton, Box } from '@mui/material';

export default function Video({ src }) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && loaded) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 } // Adjust if needed
    );

    const videoEl = videoRef.current;
    if (videoEl) observer.observe(videoEl);

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, [loaded]);

  return (
    <Box sx={{ width: '100%', maxWidth: 640, margin: 'auto' }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={360}
          sx={{ borderRadius: 2 }}
        />
      )}
      <video
        ref={videoRef}
        width="100%"
        height="360"
        muted 
        // controls
        playsInline
        style={{
          display: loaded ? 'block' : 'none',
          borderRadius: '16px',
        }}
        onLoadedData={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}