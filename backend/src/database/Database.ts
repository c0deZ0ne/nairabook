import path from "path";
import fs from "fs";
import IDatabase from "../Interfaces/IDatabase/IDatabase";
import geneateUid from "../Utils/GenUid";
import dotenv from "dotenv";
import IUser from "../Interfaces/User_interface";
import ICourses from "../Interfaces/Book_Interface";
dotenv.config();
const genId = new geneateUid();

export class Database implements IDatabase {
  db_path = process.cwd();
  _init = async (filepath: string) => {
    try {
      return  fs.readFile(path.join(filepath), async  (error, data) => {
        if (error?.code == "ENOENT") {
          console.error("file does not exist, creating db >>>>>");
          //check for file exist
          let outFile = fs.createWriteStream(filepath);
          outFile.write(JSON.stringify([]), (error) => {
            if (error == null || error == undefined) {
              return console.log(`new database created in ${filepath} `);
            } else {
              console.log("db created  up and running");
            }
          });
        } else {
        }
      });
    } catch (error: any) {
      console.error("error");
      if (error.code == "ENOENT") {
        console.log("file not exites");
      }
      let outFile = fs.createWriteStream(filepath);
      outFile.write(JSON.stringify([]), (error) => {
        console.log(error);
      });
      outFile.end(() => {
        console.log("end call");
      });
    }
  };

  constructor(public _path: string) {
    _path = path.resolve(`${this.db_path}`, _path);
    this._init(_path).then((d: any) => {
      console.log("_______databae ready ______",_path);
    });
  }

  get() {
    try {
      return require(path.resolve(process.cwd(), `${process.env.DATABASE}`));
    } catch (error: any) {
      console.error(error.message);
      return [];
    }
  }

  async create(data: any): Promise<Boolean> {
    data._id = genId.gen();
    data.created = new Date();
    try {
      let current_data = await this.get();
      let file = Array.from(current_data);
      file.push(data);
      if (file.length === current_data.length) {
        return false;
      } else {
        return this.save(file);
      }
    } catch (error) {
      return false;
    }
  }

  async read() {
    return await this.get();
  }

  async write(data: any) {
    return await this.create(data);
  }

  async update(userIdField: any, UserData: IUser): Promise<any> {
    let all_data: IUser[] = await this.get();
    //findthe user by email filed or id filed

    const user =
      (await this.findByEmail(userIdField)) ??
      (await this.findById(userIdField));

    if (user) {
      let changes = all_data.map((data) => {
        if (data._id == userIdField || data.email == userIdField) {
          return UserData;
        } else {
          return data;
        }
      });

      if (await this.save(changes)) {
        return user;
      }
      return null;
    }
  }

  async delete(data: any): Promise<Boolean> {
    let all_data = await this.get();
    let dataJson = JSON.parse(data.toString());
    let filtered = all_data.filter((doc: any) => doc._id != dataJson._id);
    let files = Array.from(filtered);
    if (files.length === all_data.length) {
      return false;
    } else {
      return this.save(files);
    }
  }

  async save(file: any): Promise<boolean> {
    let stFile = JSON.stringify(file);
    try {
      fs.writeFile(
        path.resolve(process.cwd(), `${process.env.DATABASE}`),
        stFile,
        "utf-8",
        async (error) => {
          if (error) throw error;
        }
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async findByEmail(email: string): Promise<IUser[] | null> {
    try {
      let user = await this.get();
      let result = user.filter((data: any) => {
        return data.email == email;
      });

      if (result.length > 0) {
        return result;
      }
      return null;
    } catch (error: any) {
      return null;
    }
  }

  async findById<T>(_id: string): Promise<IUser[] | null> {
    try {
      let user = await this.get();
      let result = user.filter((data: any) => {
        return data._id == _id;
      });

      if (result.length > 0) {
        return result;
      }
      return null;
    } catch (error: any) {
      //return error.message;
      return null;
    }
  }

  async get_all_books() {
    try {
      let all_data = await this.get();
      let Courses: ICourses[] = [];
      let all_courses = await all_data.forEach((data: IUser) => {
        if (!data.Courses) {
          return;
        } else {
          if (data.Courses.length > 0) {
            data.Courses.map((course) => {
              Courses.push(course);
            });
          }
        }
      });
      return Courses;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
var database = new Database(process.env.DATABASE || "database.json");
export default database;
