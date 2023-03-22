export const getDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
