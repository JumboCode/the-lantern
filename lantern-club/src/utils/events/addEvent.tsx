const handleAdd = async () => {
  const response = await fetch("api/content/events", {
    method: "POST",
  });
};

export { handleAdd };
