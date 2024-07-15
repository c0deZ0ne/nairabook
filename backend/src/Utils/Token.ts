import jwt, { JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function Gentoken(data: { email: string, _id: string }) {
  const accessToken = jwt.sign(
    data,
    process.env.SECRETEKEY_TOKEN_KEY ?? "secrete"
  );
  return accessToken;
}

export async function Validatetoken(token: any) {
  try {
    return jwt.decode(token);
  } catch (error) {
    //return null;
  }
}
