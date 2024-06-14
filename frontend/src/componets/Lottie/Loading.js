import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <dotlottie-player
        src="https://lottie.host/44a90258-66a3-4def-b547-e4e426ae9c85/NcrjzRDZAa.json"
        background="transparent"
        speed="1"
        style={{ width: 'auto', height: '400px' }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
}
