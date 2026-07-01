import express from "express";
import cors from "cors";
import testRoutes from "./routes/testRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary route
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Backend is running"
    });
});

app.use("/test", testRoutes)

export default app;