const businessProfilesLoader = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/business-profiles");
    if (!response.ok) {
      throw new Error("Failed to fetch business profiles");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default businessProfilesLoader;
