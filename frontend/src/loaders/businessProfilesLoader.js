const businessProfilesLoader = async () => {
  const spots = await fetch("http://localhost:5000/api/business-profiles");
  return spots.json();
};

export default businessProfilesLoader;
