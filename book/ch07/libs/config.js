module.exports = {
  database: "ntask",
  username: "ntask",
  password: "ntask",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    define: {
      underscored: true
    }
  },
  jwtSecret: "Nta$K-AP1",
  jwtSession: {session: false}
};
