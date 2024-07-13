import jwt, { JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function Gentoken(data: { email: string, _id: string }) {
  console.log(data);
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
    console.log(error);
    //return null;
  }
}
