import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Zaika Backend is Running 🚀");
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5",
      {
        params: {
          lat: "28.4784884",
          lng: "77.50353489999999",
          "is-seo-homepage-enabled": "true",
          page_type: "DESKTOP_WEB_LISTING",
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
          Referer: "https://www.swiggy.com/",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});