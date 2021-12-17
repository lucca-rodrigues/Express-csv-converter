const fs = require("fs");
const csvParse = require("csv-parser");

class csvController {
  // processorFile(file) {
  //   return new Promise((resolve, reject) => {
  //     const data = [];
  //     const stream = fs.createReadStream(file.path);
  //     const parseFile = csvParse();
  //     stream.pipe(parseFile);

  //     parseFile
  //       .on("data", async (line) => {
  //         const [Nome, Cargo, Nascimento] = line;
  //         data.push({
  //           name: Nome,
  //           job: Cargo,
  //           birth: Nascimento,
  //         });
  //       })
  //       .on("end", () => {
  //         resolve(data);
  //       })
  //       .on("error", (error) => {
  //         reject(error.message);
  //       });

  //     // console.log(file);
  //     // console.log(data);
  //   });
  // }
  // async upload(req, res) {
  //   const file = req.file;
  //   try {
  //     const users = await processorFile(file);
  //     console.log(users);
  //     return res.status(200).json({ message: "Ok! Api Started", users: users });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async upload(req, res) {
    const arrarObjects = [];
    try {
      const { file } = req;
      console.log(file);
      const Database = [];

      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const lineData = {
            name: line.Nome,
            job: line.Cargo,
            birt: line.Nascimento,
          };
          console.log("Data:", lineData);
          // const data = line.map((item) => {
          //   return (arrarObjects.name = item.Nome);
          // });
          // console.log("data:", data);
        })
        .on("end", () => {})
        .on("error", (error) => {
          reject(error.message);
        });
      console.log("Database", Database);
      console.log("arrarObjects", arrarObjects);
      return res.status(200).json({ message: "Ok! Api Started", Database });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new csvController();
