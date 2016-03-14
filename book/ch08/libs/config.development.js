module.exports = {
  database: "ntask",
  username: "ntaskman",
  password: "ntaskman",
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
