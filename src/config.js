module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DB_URL || "postgresql://dunder_mifflin@localhost/blogful-auth",
  JWT_SECRET: process.env.JWT_SECRET || "b0ae7519-9c2c-4e4d-b3d1-e6e803b7dd0b"
};