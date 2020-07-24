//to connect mongodb
const password = "VT1Shu2cCIsNVfaA";
const mongoURL = `mongodb+srv://userApp:${password}@cluster0.lnkx4.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("Error", (err) => {
  console.log("error", err);
});
