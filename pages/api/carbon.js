import getApiKey from "../../utils/getApiKey";
import getCarbon from "../../utils/getCarbon";

export default async (req, res) => {
  const body = req.body;
  const origin = body.origin;
  const destination = body.destination;
  const flight = body.flight;
  const key = await getApiKey();
  const carbon = await getCarbon(key, origin, destination, flight);
  console.log(carbon);
  return res.json({ carbon });
};
