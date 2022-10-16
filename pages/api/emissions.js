import getEmission from "../../utils/getEmission.js";

export default async (req, res) => {
  const emission = await getEmission();
  return res.send({ emission });
};
