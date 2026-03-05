import { connectToDatabase } from "./mongoose";

const testConnection = async () => {
    try {
        console.log("🔄 Testing database connection...");
        await connectToDatabase();
        console.log("✅ Database connected successfully!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

testConnection();