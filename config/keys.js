// module.exports = {
//   mongoURI:
//     "mongodb+srv://dev:YLo6dgJIjwfyrLsM@cluster0.sqwd7.mongodb.net/MERNdb?retryWrites=true&w=majority",
//     secretOrKey: "secret"
// };



if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}