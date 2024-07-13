import moment from 'moment';
import { format } from 'date-fns';
import html2pdf from 'html2pdf.js';
import dayjs from 'dayjs';
export const getName = (name: string) => {
  const length = name.length;
  if (length >= 18) {
    const separatedName = name.trim().split(' ');
    const FirstName = separatedName[0];
    const lastName = separatedName[separatedName.length - 1][0].toUpperCase();
    return FirstName.concat(' ', lastName);
  }
  return name;
};

export function formatUploadInstructions({
  recipientName,
  dueDate,
  requiredDocuments,
}: {
  recipientName: string;
  dueDate: string;
  requiredDocuments: string[];
}): string {
  const documentList = requiredDocuments
    .map((doc, index) => `${index + 1}. ${doc}`)
    .join('\n');

  const message = `Dear ${recipientName},\n Please click on the upload button to provide documentary evidence of submitted personal income tax due ${dueDate}, as well as other information as requested.\/n

The following documents are required:

${documentList}

Nairabook.`;

  return message;
}

export function checkDueDate(dueDate: Date | string) {
  // Parse the due date string
  const parsedDueDate = moment(dueDate);

  // Get the current date and time
  const currentDate = moment();

  // Calculate the difference in days between the current date and the due date
  const daysDifference = parsedDueDate.diff(currentDate, 'days');

  if (daysDifference < 0) {
    return 'Overdue';
  } else if (daysDifference <= 60) {
    return 'Near due';
  } else {
    return 'Not near due date';
  }
}

//modigy here while you deploy to other country
export const formatCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
  return formatter.format(amount);
};

export const genYears = () => {
  const yearOptions = Array.from({ length: 19 }, (_, index) => ({
    key: (new Date().getFullYear() - 9 + index).toString(),
    value: (new Date().getFullYear() - 9 + index).toString(),
  }));
  return yearOptions;
};

export const itemCounter = (items: Array<object>) => {
  if (items?.length === 0) return `${items.length} item`;
  else return `${items.length} items`;
};

export const PrintToPDF = ({ key }: { key: string }) => {
  const element = document.getElementById(key || 'root');
  const opt = {
    margin: 0.3,
    filename: `${key}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2.5 },
    jsPDF: { unit: 'in', format: 'A4', orientation: 'landscape' },
  };
  html2pdf().from(element).set(opt).save();
};

export const formatDate = (dateString: any) => {
  // Convert the string to a Date object
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // Format the date using date-fns
  return format(date, 'yyyy-MM-dd');
};
export const formatDateTable = (dateString: any) => {
  // Convert the string to a Date object
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // Format the date using date-fns
  return format(date, 'dd, MMM');
};

export function base64ToImageAndSendFormData(base64String: string) {
  // Convert the base64 string to binary data
  const binaryData = atob(base64String.split(',')[1]); // Decode base64 string

  // Convert binary string to Uint8Array
  const byteArray = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    byteArray[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Adjust the type if needed
  return blob;
}

export async function downloadBase64File({
  base64String,
  filename,
  contentType,
}: {
  base64String: string;
  filename: string;
  contentType: string;
}) {
  // Decode the Base64 string
  const byteCharacters = atob(base64String);

  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create a Blob from the decoded Base64 data
  const blob = new Blob([byteArray], { type: contentType });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  // Simulate a click event to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by revoking the URL
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}

export const getYears = () => {
  const startYear = moment().subtract(100, 'years').year();
  const endYear = moment().add(100, 'years').year();
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
};

export const monthOptions = Array.from({ length: 12 }, (_, index) => ({
  key: dayjs().month(index).format('MMM'),
  value: dayjs().month(index).format('MMM'),
}));

export const getColor = (key: string) => {
  const out =
    key == 'PIT_PAYE'
      ? 'bg-[#00B8F5] grid col-span-3 w-[100%]'
      : key == 'CIT'
        ? 'bg-[#FFA3DA] col-span-3'
        : key == 'VAT'
          ? 'bg-stone-300  col-span-3'
          : key == 'WHT'
            ? 'bg-red-300 opacity-70  col-span-2'
            : key == 'PPT_EST_P'
              ? 'bg-[#A6CEE3]  col-span-3 text-black'
              : key == 'PPT_FIN'
                ? 'bg-[#A6CEE3]  col-span-3 text-black'
                : key == 'PPT_EST_R'
                  ? 'bg-[#A6CEE3]  col-span-3 text-black'
                  : key == 'VAT_OUT'
                    ? 'bg-[#DEDAD2]  col-span-3 text-black'
                    : key == 'VAT_WH'
                      ? 'bg-[#DEDAD2]  col-span-3 text-black'
                      : key == 'TP_R'
                        ? 'bg-[#FD349C]  col-span-3'
                        : key == 'PIT'
                          ? 'bg-[bg-[#00B8F5]  col-span-3'
                          : key == 'CGT'
                            ? 'bg-pink-500  col-span-3'
                            : key == 'PIT_EAR'
                              ? 'bg-[#00B8F5] col-span-3'
                              : key
                                ? ' bg-gray-500 text-white  col-span-3'
                                : '';

  return out;
};

export function buildURL(baseUrl: string, params: Record<string, string>) {
  const queryParams = new URLSearchParams();

  for (const key in params) {
    if (params[key]) {
      queryParams.append(key, params[key]);
    }
  }

  return `${baseUrl}?${queryParams.toString()}`;
}
