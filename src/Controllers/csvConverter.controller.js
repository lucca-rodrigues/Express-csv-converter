const fs = require("fs");
const csvParse = require("csv-parser");
const Database = [];
class csvController {
  async index(req, res) {
    try {
      const data = await Database;

      if (!data) {
        return res.status(400).json({ error: "Database is empty" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async upload(req, res) {
    try {
      const { file } = req;

      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const lineData = {
            id: Database.length,
            name: line.Nome,
            job: line.Cargo,
            birt: line.Nascimento,
          };
          await Database.push(lineData);
        })
        .on("end", () => {
          console.log("Database", Database);
          return res.status(200).json({ message: "Ok! Api Started", Database });
        })
        .on("error", (error) => {
          reject(error.message);
        });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new csvController();
