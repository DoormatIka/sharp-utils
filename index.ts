import express from "express";
import sharp   from "sharp";
import fs      from "fs";

const app = express();
app.use(express.json({ limit: "20mb" }));

app.post("/convertwebp", express.raw({ type: "*/*", limit: "20mb" }), async (req, res) => {
    const p = await sharp(req.body)
        .png()
        .toBuffer();
    res.send(p);
});

app.listen(3500, () => {
    console.log(`Connected to localhost:3500.`);
});