const businessDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:7000/business-profiles/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const spotDetails = await response.json();
  return spotDetails;
};

export default businessDetailsLoader;
