module.exports = {
  development: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
  test: {
    dialect: 'sqlite',
  },
  production: {
    dialect: 'postgres',
    use_env_variable: 'postgres://jydhizatxuflxq:dcab2e97335e65731a6c2cf5158056889943a548f9c7b6aed777b5f66925ee1f@ec2-34-198-189-252.compute-1.amazonaws.com:5432/dd794uoudere7d',
  }
};
