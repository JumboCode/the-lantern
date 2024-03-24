const handleDelete = async (idToDelete: string) => {
  const response = await fetch("/api/content/events", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: idToDelete }),
  });
};

export { handleDelete };
