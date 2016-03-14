module.exports = {
  database: "ntask_test",
  username: "ntaskman",
  password: "ntaskman",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: "Nta$K-TEST",
  jwtSession: {session: false}
};
