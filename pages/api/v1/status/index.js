function status(request, response) {
  response
    .status(200)
    .json({ chave: "testando se o endpoint status tá funcionando ou não" });
}

export default status;
