import * as yup from 'yup';
export const Create_EditBookSchema = yup.object().shape({
  coverImage: yup.string().required('please provide cover photo url'),
  title: yup.string().required('Please provide valid title'),
  description: yup.string().required('Please provide description'),
  genre: yup.string().required('Please provide book genre'),
  publicationDate: yup.string().required('Please provide publication date'),
});
