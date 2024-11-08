import query from "../../../../infra/database.js";

async function status(request, response) {
  const result = await query("SELECT 1 + 1 as SUM");
  console.log(result);
  response.status(200).json({ response: "testando" });
}

export default status;
