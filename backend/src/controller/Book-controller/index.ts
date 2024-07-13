import { json } from "stream/consumers";
import database from "../../database/Database";
import ICourses from "../../Interfaces/Book_Interface";
import IUser from "../../Interfaces/User_interface";
import geneateUid from "../../Utils/GenUid";

export const _get_all_books = async (req: any, res: any, next: any) => {
  try {
    // let all_data = await database.get()
    let allbooks = await database.get_all_books();
    return res.json({ code: 200, allbooks });
  } catch (error) {
    next(error);
  }
};
export const _create_book = async (req: any, res: any, next: any) => {
  try {
    console.log(req.body);
    let new_book = req.body;
    new_book.id = new geneateUid().gen();
    const { email } = req?.user; // get the email from jwt
    let UserData = await database.findByEmail(email);
    if (UserData) {
      UserData[0].Courses?.unshift(new_book);
      let relsult = await database.update(email, UserData[0]);
      if (relsult) {
        res.status(201).json({ code: 201, relsult });
      } else {
        throw { code: 400, message: "could not create book" };
      }
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const _update_book = async (req: any, res: any, next: any) => {
  //joi filed auth

  try {
    const { bookId } = req.params;
    const { email, _id } = req.user;
    console.log(bookId, email, _id, req.body);
    let bookFields: ICourses = req.body;
    let all_books = await database.get_all_books();
    let userData: IUser[] | null = await database.findByEmail(email);

    let book_to_update = all_books.filter((book) => book.id == bookId);

    if (book_to_update.length > 0) {
      book_to_update.forEach((filed) => {
        bookFields["description"]
          ? (filed.description = bookFields["description"])
          : null;
        bookFields["title"] ? (filed.title = bookFields["title"]) : null;
        bookFields["image"] ? (filed.image = bookFields["image"]) : null;
        bookFields["price"] ? (filed.price = bookFields["price"]) : null;
      });

      if (userData) {
        if (userData.length > 0) {
          userData[0].Courses?.forEach((books) => {
            if (books.id == bookId) return book_to_update;
            return books;
          });

          database.update(email, userData[0]);
        }
      }

      res.status(200).json(book_to_update);
    } else {
      throw { code: 400, message: " couldn't update" };
    }
  } catch (error) {
    next(error);
  }
};

export const _delete_book = async (req: any, res: any, next: any) => {
  try {
    const { bookId } = req.params;
    const { email, _id } = req?.user;
    let all_books = await database.get_all_books();
    let userData: IUser[] | null = await database.findByEmail(email);
    let book_to_update = all_books.filter((book) => book.id == bookId);
    if (book_to_update.length > 0) {
      if (userData && userData.length > 0) {
        let dat = userData[0].Courses?.filter((books) => books.id != bookId);

        userData[0].Courses = dat;
        database.update(email, userData[0]);
        res.status(200).json({ code: 200, message: " Delete succesfully" });
      } else {
        throw { code: 400, message: "could not delete" };
      }
    } else {
      throw { code: 400, message: " No such book in your collection" };
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
