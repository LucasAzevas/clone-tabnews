function status(request, response) {
  response.status(200).json({ response: "testando" });
}

export default status;
