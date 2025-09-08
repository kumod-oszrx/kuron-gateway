import axios from 'axios';

import { Enum } from '../../configs/enum';

export const restRouter = async (req: any, res: any) => {
  try {
    // console.log(req.path); // log is /users for call localhost:5000/api/r/users
    const url = `${process.env.PAYLOAD_URL || Enum.PAYLOAD_URL}/api${req.path}`;
    const response = await axios.request({
      method: req.method,
      url,
      headers: req.headers,
      data: req.body,
    });
    res.json({ ...response.data });
  } catch (error) {
    res.status(500).json({ message: "Error processing request" });
  }
};
