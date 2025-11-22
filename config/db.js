import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // Await the connection and store it in a variable
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
    console.log(`Connected to DB: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
