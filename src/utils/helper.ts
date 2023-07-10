const generateUniqueId = (): string => {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomNum = Math.floor(Math.random() * 90000) + 10000; // Random 5-digit number

  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
};

export { generateUniqueId };
