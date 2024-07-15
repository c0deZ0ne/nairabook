import database from "../../database/Database";
import ICourses from "../../Interfaces/Book_Interface";
import IUser from "../../Interfaces/User_interface";
import geneateUid from "../../Utils/GenUid";
import { NextFunction } from "express";

export const _get_all_books = async (req: any, res: any, next: any) => {
  try {
    let allBooks = await database.get_all_books();
    return res.json({ code: 200, data:allBooks,message:"Operation Successful" });
  } catch (error) {
    next(error);
  }
};
export const _create_book = async (req: any, res: any, next: any) => {
  try {
    let new_book = req.body;
    new_book.id = new geneateUid().gen();
    const { email } = req?.user; // get the email from jwt
    let UserData = await database.findByEmail(email);
    if (UserData) {
      UserData[0].Courses?.unshift(new_book);
      let relsult = await database.update(email, UserData[0]);
      if (relsult) {
        res.status(201).json({ code: 201,data: relsult[0]['Courses'][0], message: "book created"});
      } else {
        throw { code: 400, message: "could not create book" };
      }
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
};
export const _update_book = async (req: Request|any, res: |any, next: NextFunction) => {
  try {
    const { bookId } = req.params;
    const { email } = req.user;
    const bookFields: Partial<ICourses> = req.body; // Ensure bookFields is of type ICourses or its partial

    // Fetch all books and user data
    const all_books = await database.get_all_books();
    const userData: IUser[] | null = await database.findByEmail(email);

    // Find the book to update
    const book_to_update = all_books.find((book) => book.id === bookId);

    if (!book_to_update) {
      throw { code: 400, message: "Book not found or couldn't update" };
    }
    if (bookFields.description) {
      book_to_update.description = bookFields.description;
    }
    if (bookFields.title) {
      book_to_update.title = bookFields.title;
    }
    if (bookFields.image) {
      book_to_update.image = bookFields.image;
    }
    if (bookFields.coverImage) {
      book_to_update.coverImage = bookFields.coverImage;
    }
    if (bookFields.price) {
      book_to_update.price = bookFields.price;
    }
    if (bookFields.genre) {
      book_to_update.genre = bookFields.genre;
    }
    if (bookFields.publicationDate) {
      book_to_update.publicationDate = bookFields.publicationDate;
    }

    // Update user's courses if user data exists
    if (userData && userData.length > 0) {
      const updatedCourses = userData[0].Courses?.map((book) =>
        book.id === bookId ? { ...book, ...book_to_update } : book
      );
      userData[0].Courses = updatedCourses;
      await database.update(email, userData[0]);
    }

    // Respond with updated book
    res.status(200).json({code:200,message:"Updated successfully",data:book_to_update});
  } catch (error) {
    next(error); // Pass error to the next middleware
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
