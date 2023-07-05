module.exports = {
  plugins: {
    //自動添加瀏覽器前綴
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
