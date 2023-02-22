import EmissionModel from '../models/emissionModel.js';
import connectMongo from './connectMongo.js';

const getEmission = async () => {
  try {
    console.log('Getting fact');
    await connectMongo();
    const emission = await EmissionModel.aggregate()
      .sample(1)
      .project({ Country: 1, Value: 1, Measure: 1, Time: 1 });
    if (emission) {
      console.log(emission[0], '1');
      return emission[0];
    }
  } catch (error) {
    console.log('SOMETHING DIDNT WORK');
    console.log(error);
  }
};

export default getEmission;
