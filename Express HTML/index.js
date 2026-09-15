import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    fs.readFile("./pages/index.html", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error Reading file");
        }

        res.send(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile("./pages/about.html", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error Reading file");
        }

        res.send(data);
    });
});

app.get("/contact", (req, res) => {
    fs.readFile("./pages/contact.html", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error Reading file");
        }

        res.send(data);
    });
});

app.listen(port, () => {0
    console.log(`Server is running on port ${port} http://localhost:${port}`);
});