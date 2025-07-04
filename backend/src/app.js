import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

import dotenv from "dotenv";
dotenv.config();


const app = express();
const server = createServer(app);
const io = connectToSocket(server)


app.set("port", (process.env.PORT || 8000))
// app.use(cors());
app.use(cors({
  origin: "https://cosync-frontend.onrender.com",
  credentials: true, // needed if you're using cookies/auth headers
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

 const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connectionDb.connection.host}`);

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};


start();