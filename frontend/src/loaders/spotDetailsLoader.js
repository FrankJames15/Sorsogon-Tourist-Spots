const spotDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `http://localhost:8000/tourist_spots/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const spotDetails = await response.json();
  return spotDetails;
};

export default spotDetailsLoader;
