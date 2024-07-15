import React, { useState } from 'react';
import Bookcard from '../../../ui-components/cards/bookcard';
import Breadcrumb from '../../../layout/userLayout/component/breadcrumb/breadcrumb';
import Popover from '@mui/material/Popover';
import EditBook from './editbook';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IBook } from '../../../types';
import { Button } from '../../../ui-components/button';
import { useDeleteBookMutation } from './bookApi';

function Book() {
  const { books } = useSelector((state: RootState) => state.persistUser);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const dispatch = useDispatch();
  const [
    deleteBook,
    { data: deleteResponseData, isError, isSuccess, isLoading },
  ] = useDeleteBookMutation();
  const [editBook, setEditBook] = useState<IBook | undefined>(undefined);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (data: any) => {
    if (data.type === 'delete') {
      deleteBook(data.book);
      return;
    } else if (data.type === 'edit') {
      console.log(data);
      setEditBook(() => data?.book);
      handleClick(data.event);
    } else if (data.type === 'create') {
      setEditBook(undefined);
      handleClick(data.event);
    }
  };
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className="flex w-[100%] min-h-[55px]    ">
        <Breadcrumb
          title="Books"
          Element={
            <Button
              handleClick={(e: any) => handleEdit({ event: e, type: 'create' })}
              value={'+ Add Book'}
              className="text-[12px] text-white h-[30px] bg-blue-600 w-[100px] mt-auto mb-auto"
            />
          }
          showBack={false}
        />
      </div>

      <section className="mb-[5px] px-[20px] overflow-y-auto py-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books?.map((book, index) => (
            <Bookcard book={book} index={index} handleClicked={handleEdit} />
          ))}
        </div>
      </section>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className=" border-none custom-popover-second-level"
        elevation={0}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 100,
        }}
        transformOrigin={{
          vertical: 0,
          horizontal: 10,
        }}
      >
        <div className="w-[100%] h-[100%] flex items-center flex-col align-middle  justify-items-center  border-none rounded-xl">
          <EditBook bookToEdit={editBook} type={editBook ? 'edit' : 'create'} />
        </div>
      </Popover>
    </div>
  );
}

export default Book;
