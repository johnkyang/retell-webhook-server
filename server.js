import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

console.log("🚀 Starting Webhook Server...");
console.log("PORT:", PORT);

app.get("/", (req, res) => {
    res.send("Retell Webhook Server Running");
});

app.post("/webhooks/retell/call-result", (req, res) => {
    console.log("📞 Retell Webhook Received:");
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});