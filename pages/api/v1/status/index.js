import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    .json({ chave: "testando se o endpoint status tá funcionando ou não" });
}

export default status;
