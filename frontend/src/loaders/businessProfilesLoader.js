const businessProfilesLoader = async () => {
  const spots = await fetch("http://localhost:7000/business-profiles");
  return spots.json();
};

export default businessProfilesLoader;
