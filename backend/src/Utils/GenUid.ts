import crypto from "crypto";
export default class geneateUid {
  gen() {
    return crypto
      .createHash("sha256")
      .update(crypto.randomBytes(2000))
      .digest("hex");
  }
}
