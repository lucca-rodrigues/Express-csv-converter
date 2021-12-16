const csv = require("csv-parser");

class csvController {
  async upload(req, res) {
    const stream = fs.createReadStream(file.path);
    const categories = [];

    const parseFile = csvParse();
    stream.pipe(parseFile);
    parseFile
      .on("data", async (line) => {
        const [name, description] = line;

        categories.push({ name, description });
      })
      .on("end", () => {
        resolve(categories);
      })
      .on("error", (err) => reject(err));

    return categories;

    // fs.createReadStream("data.csv")
    //   .pipe(csv())
    //   .on("data", (data) => results.push(data))
    //   .on("end", () => {
    //     console.log(results);
    //     // [
    //     //   { NAME: 'Daffy Duck', AGE: '24' },
    //     //   { NAME: 'Bugs Bunny', AGE: '22' }
    //     // ]
    //   });
  }

  async teste(req, res) {
    const { file } = req;

    console.log(file);
    return res.send();
  }
}

module.exports = new csvController();
