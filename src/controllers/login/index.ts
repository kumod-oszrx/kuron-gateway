import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Enum } from '../../configs/enum';

export const loginController = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const { data } = await axios.get(
      `${process.env.PAYLOAD_URL || Enum.PAYLOAD_URL}/api/users?where[email]=${email}`
    );
    const user = data.docs[0];
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};
