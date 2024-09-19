const spotsLoader = async () => {
  const spots = await fetch("http://localhost:5000/api/tourist-spots");
  return spots.json();
};

export default spotsLoader;
