import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 phút
  max: 10, // max 100 request / IP trong 1 phút
  standardHeaders: true, // gửi thông tin rate-limit về headers
  legacyHeaders: false,
  message: "Too many requests, please try again later."
});