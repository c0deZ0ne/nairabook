import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { Button } from '../../../ui-components/button';
import { Create_EditBookSchema } from '../../../validations/create_edit_book';
import { handleCreateBook, handleEditBook } from '../../auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IBook } from '../../../types';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import { RootState } from '../../../redux/store';
import { useCreateBookMutation, useUpdateBookMutation } from './bookApi';

function EditBook({
  bookToEdit,
  type,
}: {
  bookToEdit?: IBook;
  type: 'create' | 'edit';
}) {
  const [createBookApi, { data, isLoading, isError, isSuccess }] =
    useCreateBookMutation();
  const [
    updateBookApi,
    {
      data: updateBookResponse,
      isLoading: updateBookLoading,
      isError: updateBookError,
      isSuccess: updateBookSuccess,
    },
  ] = useUpdateBookMutation();

  const { books, email, fullName, name } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const stateBook = bookToEdit
    ? books.find((book) => book.id == bookToEdit.id)
    : undefined;

  const dispatch = useDispatch();
  const onSubmit = async (values: FormikValues, actions: FormikValues) => {
    if (type == 'edit') {
      // dispatch(handleEditBook({ ...stateBook, ...values }));
      try {
        updateBookApi({ ...stateBook, ...values });
        if (updateBookSuccess) {
          actions.resetForm();
        }
      } catch (error) {}
    } else if (type == 'create') {
      try {
        createBookApi({ ...values, authorId: email, author: fullName || name });
        if (isSuccess) {
          actions.resetForm();
        }
      } catch (error) {}
    }
  };

  const {
    values,
    handleBlur,
    touched,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      coverImage: stateBook?.coverImage || '',
      title: stateBook?.title || '',
      description: stateBook?.description || '',
      genre: stateBook?.genre || '',
      publicationDate: stateBook?.publicationDate || '',
    },
    validationSchema: Create_EditBookSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center w-[400px]  overflow-y-auto p-[20px]">
      <h1> {type == 'edit' ? 'Edit Book' : 'Created Book'}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full max-w-md"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="coverImage" className="text-sm font-medium">
              Cover Image
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.coverImage && touched.coverImage
                  ? 'border-2 border-red-500'
                  : touched.coverImage
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="text"
              id="coverImage"
              name="coverImage"
              placeholder="cover book url"
              onChange={handleChange}
              value={values.coverImage}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors?.coverImage as string}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="title" className="text-sm font-medium">
              Book Title
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.title && touched.title
                  ? 'border-2 border-red-500'
                  : touched.title
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="text"
              id="title"
              name="title"
              placeholder="Please enter your title"
              onChange={handleChange}
              value={values.title}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors?.title as string}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.description && touched.description
                  ? 'border-2 border-red-500'
                  : touched.description
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="text"
              aria-multiline={true}
              id="description"
              name="description"
              placeholder="Please enter your description"
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors.description as string}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="genre" className="text-sm font-medium">
              Genre
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.genre && touched.genre
                  ? 'border-2 border-red-500'
                  : touched.genre
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="genre"
              id="genre"
              name="genre"
              placeholder="please  enter genre"
              onChange={handleChange}
              value={values.genre}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors.genre as string}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="publicationDate" className="text-sm font-medium">
              Publication Date
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.publicationDate && touched.publicationDate
                  ? 'border-2 border-red-500'
                  : touched.publicationDate
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="date"
              id="publicationDate"
              name="publicationDate"
              placeholder="please  enter publication date"
              onChange={handleChange}
              value={values.publicationDate}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors.publicationDate as string}
            </span>
          </div>
        </div>
        <Button
          className={`bg-blue-600 h-10 text-white flex justify-center items-center ${
            isSubmitting || isLoading ? 'cursor-wait opacity-50' : ''
          }`}
          props={{ type: 'submit', disabled: isSubmitting || isLoading }}
          value={type == 'edit' ? 'Save' : 'Add Book'}
        />
      </form>
    </div>
  );
}

export default EditBook;
