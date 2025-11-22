import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
connectDb();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://waqas-blog-app-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running successfully!",
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
