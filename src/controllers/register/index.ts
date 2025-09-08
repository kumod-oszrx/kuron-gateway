import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerController = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    // Kiểm tra user có tồn tại trong Payload
    const { data } = await axios.get(
      `${process.env.PAYLOAD_URL}/api/users?where[email]=${email}`
    );
    if (data.docs.length > 0)
      return res.status(400).json({ message: "User already exists" });

    // Hash password trước khi tạo
    const hashed = await bcrypt.hash(password, 10);

    const user = await axios.post(`${process.env.PAYLOAD_URL}/api/users`, {
      email,
      password: hashed,
      role: "client",
    });

    // Tạo JWT cho client
    const token = jwt.sign(
      { id: user.data.id, email: user.data.email, role: user.data.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    res.json({ token, user: user.data });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};
