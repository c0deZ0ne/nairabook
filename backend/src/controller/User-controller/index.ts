import IUser from "../../Interfaces/User_interface";
export const _get_all_users = async (req: any, res: any, next: any) => {
  try {
    res.json({ code: 200, message: " user created" });
  } catch (error) {
    next(error);
  }
};

export const _create_user = async (data: IUser) => {
  // await get_all_books()
  return "create user";
};

export const _update_user = async (data: IUser) => {
  // await get_all_books()
  return "update a user details";
};

export const _delete_user = async (id: string) => {
  // await get_all_books()
  return "deleted user";
};
