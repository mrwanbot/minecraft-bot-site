const express = require("express");
const cors = require("cors");
const { status } = require("minecraft-server-util");

const app = express();
app.use(cors());

app.get("/ping", async (req, res) => {

  const ip = req.query.ip;
  const port = parseInt(req.query.port || "25565");

  try {
    const result = await status(ip, port);

    res.json({
      online: true,
      players: result.players.online,
      max: result.players.max
    });

  } catch {
    res.json({ online: false });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running");
});
