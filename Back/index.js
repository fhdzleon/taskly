const app = require("./src/server");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server ready, listen in port ${PORT}`);
});
