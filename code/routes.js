const registerRoutes = (app) => {
  // api health check
  app.get("/", (req, res) => {
    res.status(200).json({ msg: "health check passed! API is alive." });
  });

  /* ADD STUFF HERE */
};

module.exports = registerRoutes;