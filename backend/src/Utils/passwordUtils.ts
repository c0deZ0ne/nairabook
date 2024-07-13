import crypto from "crypto";
import database from "../database/Database";
import IAuth from "../Interfaces/IAuth_Interface";
// import { credential } from '../models/credential.model';


export async function GenPassword<T extends string | number>(
  input: T
): Promise<string> {
  const hash512 = crypto.createHash("sha512");
  const hashData = hash512.update(JSON.stringify(input), "utf-8");
  const hashedPassword = hashData.digest("hex");
  return hashedPassword;
}

export async function validatePassword<T extends IAuth>(
  input: T
): Promise<Boolean> {
  const email = input.email;
  const InputPassword = input.password;
  const hashedPassword = await GenPassword(InputPassword);

  try {
    let user = await database.findByEmail(email);
    if (user) {
      const { password } = user[0];
      return hashedPassword === password;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
