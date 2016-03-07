module.exports = app => {

  const PORT = app.get("port");

  app.db.sync().done(() => {
    app.listen(PORT, () => {
      console.log(`NTask API - PORT ${PORT}`);
    });
  });
};
