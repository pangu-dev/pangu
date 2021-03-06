import dotenv from "dotenv";
import path from "path";
import Joi from "joi";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    SSL_PORT: Joi.number().default(443),
    MONGODB_SCHEME: Joi.string()
      .valid("mongodb", "mongodb+srv")
      .default("mongodb")
      .description("Mongo DB scheme"),
    MONGODB_HOST: Joi.string().required().description("Mongo DB url"),
    MONGODB_USER: Joi.string().description("Mongo DB user"),
    MONGODB_PASSWORD: Joi.string().description("Mongo DB password"),
    MONGODB_DB: Joi.string().required().description("Mongo DB name"),
    REDIS_URL: Joi.string().required().description("Redis DB url"),
    REDIS_PORT: Joi.string().required().description("Redis DB port"),
    REDIS_PASSWORD: Joi.string().required().description("Redis DB password"),
    REDIS_DATABASE: Joi.string().required().description("Redis DB database"),
    SESSION_SECRET: Joi.string().required().description("Session secret key"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which verify email token expires"),
    SMTP_HOST: Joi.string().description("server that will send the emails"),
    SMTP_PORT: Joi.number().description("port to connect to the email server"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description(
      "the from field in the emails sent by the app"
    ),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  sslPort: envVars.SSL_PORT,
  mongoose: {
    url:
      (envVars.MONGODB_SCHEME ? `${envVars.MONGODB_SCHEME}://` : "") +
      (envVars.MONGODB_USER && envVars.MONGODB_PASSWORD
        ? `${envVars.MONGODB_USER}:${envVars.MONGODB_PASSWORD}@`
        : "") +
      envVars.MONGODB_HOST +
      (envVars.MONGODB_DB ? `/${envVars.MONGODB_DB}` : "") +
      (envVars.NODE_ENV === "test" ? "-test" : ""),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  redis: {
    url: envVars.REDIS_URL,
    port: envVars.REDIS_PORT,
    password: envVars.REDIS_PASSWORD,
    database: envVars.REDIS_DATABASE,
  },
  session: {
    secret: envVars.SESSION_SECRET,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes:
      envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};
