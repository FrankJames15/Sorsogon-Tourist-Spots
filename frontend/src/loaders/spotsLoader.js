const spotsLoader = async () => {
  const spots = await fetch("http://localhost:8000/tourist_spots");
  return spots.json();
};

export default spotsLoader;
