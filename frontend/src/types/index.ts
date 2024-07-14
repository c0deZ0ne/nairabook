import { EntityId } from '@reduxjs/toolkit';
import { CSSProperties, FC } from 'react';
import { HTMLAttributes } from 'react';

export enum AlertTypes {
  Warning = 'Warning',
  Success = 'Success',
  Error = 'Error',
}

export type BaseQueryType = {
  filter: string | undefined;
  pageNumber: number;
  pageSize: number;
  startDate: string;
  endDate: string;
};

export type ActivityInterval =
  | 'Today'
  | 'ThisWeek'
  | 'LastTwoWeeks'
  | 'ThisMonth'
  | 'ThisQuarter'
  | 'ThisHalf'
  | 'ThisYear'
  | 'All';

export type OverViewQuery = BaseQueryType & {
  activityInterval: ActivityInterval;
};

export interface ButtonProps {
  value?: string | number;
  style?: CSSProperties;
  className?: string;
  props?: React.ReactPropTypes | Object;
  url?: string;
  handleClick?: Function;
  isLoading?: boolean;
}
export interface loginCredentials {
  username: string;
  password: string;
}
export interface IchangePassword {
  username: string | null;
  currentPassword: string;
  newPassword: string;
}
export interface IPasswordRequestOtp {
  username: string;
}
export interface IChangePasswordWithOtp {
  username: string | null;
  newPassword: string;
  token: number;
}

export interface ISidBarItems {
  icon: any;
  title: string;
  path: string;
  isActive: boolean;
  children?: ISidBarItems[];
}

export interface IBook {
  
    id:string,
    authorId:string
    title: string;
    author: string;
    publicationDate: string;
    genre: string;
    description: string;
    coverImage:string
  
}
export interface IAuthenticatedUser {
  clientId: number | null;
  isOrgActive: boolean;
  userName: string | null;
  currentRole: string;
  refreshToken: string | null;
  country: string | null;
  daysToExpiration: number | null;
  email: string | null;
  firstName: string | null;
  imageContent: string | null;
  imagename: string | null;
  isChangePasswordRequired: boolean | null;
  jobTitle: string | null;
  lastName: string | null;
  middleName: string | null;
  pWord: string | null;
  permissions: string[] | null;
  phoneNumber: string | null;
  roles: string[];
  isGroup: boolean;
  taxTypes: any[] | null; // You can replace 'any[]' with the appropriate type if needed
  isAuthenticated: boolean | null;
  accessToken: string | null;
  userData: Record<any, any> | undefined;
  address: string | null;
  companyEmail: string | null;
  supervisorEmail: string | null;
  department: string | null;
  isUpdatedRequired: boolean;
  sysConfig: null | Record<any, any>;
  sideBar: ISidBarItems[];
  authorId:string,
  books:Array<IBook>
}

export type schedularData = { dueDate: Date; description: string; tax: string };
export interface ISchedular {
  taxDetails: schedularData | null;
  yearFullData: any;
  selectedMonth: Record<string, any>;
  activeView: 'Day' | 'Month' | 'Week';
  dayData: Array<any>;
  monthData: Record<any, any> | null;
  yearData: any;
  activeYear: number;
  date: any;
}

export interface IUserSliceInitState {
  user: IAuthenticatedUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// export interface TaxTask {
//   id: number;
//   taxPseudoMnemonic: string;
//   isTicketSent: boolean;
//   isRead: boolean;
//   createdOn: string;
//   nextReminderDate: string;
//   dueDate: string;
//   isAcknowledged: boolean;
//   isSubmitted: boolean;
//   submittedDate: string;
//   submittedBy: string;
//   isReviewed: boolean;
//   reviewedBy: string | null;
//   reviewDate: string | null;
//   requiredDocuments: string[];
//   isInternal: boolean;
//   message: string | null;
//   financialYear: number;
// }

export enum timeType {
  DEADLINE = 'DEADLINE',
  TIMEPASSED = 'TIMEPASSED',
}

export interface INotificationsData {
  title: string;
}

export interface INotificationsDataProps {
  title: string;
  arr: INotificationDataItem[];
}
export interface INotificationDataItem {
  img: string;
  title: string;
  desc: string;
}

export interface IActivity {
  userName: string;
  date: Date | string;
  description: string;
  taxType: string;
  profilePix: string | undefined;
  dateCreated: Date | string;
}

export interface ISvgProps {
  className?: string;
  width?: string;
  opacity?: string;
  height?: string;
  fill?: string;
}

export type TaxRecord = {
  dueDate: string;
  filingPeriod: string;
  isCompleted: boolean;
  isCompliant: boolean;
  metCompliance: string;
  status: string;
  taxType: string;
  ticketId: EntityId;
  id: EntityId;
};

export type INotificationType = {
  required_documents: string[] | [];
  id: number | string;
  isRead: boolean;
  taxPseudoMnemonic: string;
  isTicketSent: boolean;
  createdOn: string;
  nextReminderDate: string;
  dueDate: string;
  isAcknowledged: boolean;
  isSubmitted: boolean;
  submittedDate: string | null;
  submittedBy: string | null;
  isReviewed: boolean;
  reviewedBy: string | null;
  reviewDate: string | null;
  requiredDocuments: string[];
  isInternal: boolean;
  message: string | null;
  period?: string | Date;
};
export type NotificationResponseType = {
  ids: EntityId[];
  id: EntityId;
  entities: Record<EntityId, INotificationType>;
};

export interface IDocProps {
  folder: string;
  title: string;
  date: string;
  id: number;
  noOfDocs: number;
  owner: string;
  docType: number;
  docId?: number;
}

export interface IDocData {
  heading: any[];
  tableRows: any[];
}

export interface ChartDataProps {
  title: string;
  imgPath: string;
  alt: string;
}

export interface ButtonViewI extends HTMLAttributes<HTMLButtonElement> {
  img?: string;

  active: boolean;
}

export type H = string;
export interface Employee {
  id: string;
  entity: string[];
  description: string;
  date: string;
}

export interface rowDataTable {
  headings: H[];
}
export type T = string;

export interface taxDataTable {
  headings: string[];
}

export interface MemberData {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  jobTitle: string;
  role: string;
  taxType: string;
  description: string;
  startDate: string;
  endDate: string;
}
export interface MemberDataI {
  id: number;
  name: string;
  avatar: string;
  email: string;
  jobTitle: string;
  role: string;
  taxType: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface RoleData {
  id: string;
  entityName: string;
  taxType: string[];
  description: string;
  startDate: string;
  endDate: string;
}

export interface RoleTypes {
  id: number;
  name: string;
  description: string;
  createdOn: string;
  jurisdiction: string;
  numberOfUsers: number;
  avatar: string;
  email: string;
  jobTitle: string;
  role: string;
  taxType: string;
  startDate: string;
  endDate: string;
}
export interface UpdateRoleTypes {
  roleId: number | null;
  description: string;
  permissionId: string;
}
export interface SubsidiaryData {
  id: string;
  entityName: string;
  email: string;
  jurisdiction: string;
  startDate: string;
  endDate: string;
}
export interface SubsidiaryHeaderT {
  headings: string[];
}

export interface employeeDataT {
  headings: string[];
}

export interface EmployeeData {
  id: string;
  entityName: string;
  email: string;
  jurisdiction: string;
  startDate: string;
  endDate: string;
}

export interface TaxData {
  id: string;
  taxName: string;
  mnemonic: string;
  pseudoMnemonic: string;
  description: string;
  dueDate: string;
}

export interface IModalState {
  isOpen: boolean;
  isLoading: boolean;
  element: JSX.Element | FC | null;
}

export type TaxT = {
  id: number;
};
export type RoleT = {
  id: number;
};
export interface EmployeeProps {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  registeredAddress: string;
  address: string;
  email: string;
  imageContent?: string;
  imagename: string;
  userImage: string;
  phoneNumber: string;
  country: string;
  supervisorEmail: string;
  department: string;
  jobTitle: string;
  SubsidiaryId: string;
}
export interface EmployeePropsT {
  roles: {}[];
  taxTypes: {}[];
  roleIds: [];
  taxIds: [];
  Users: [];
  id: number;
}

interface FieldItem {
  id: number;
  controlTransaction: string;
  currency: string;
  counterParty: string;
  filingJurisdiction: string;
}
interface DataItem {
  id: number;
  data: string;
}
interface DocumentItem {
  id: number;
  document: string;
}
interface SavedItem {
  id: number;
  savedData: string;
  ordering: number;
}
interface ComputedItem {
  id: number;
  title: string;
  numerator: number;
  denominator: number;
}
export interface SubsidiaryProps {
  relatedPartyTrans: FieldItem[];
  phoneNumber: string;
  companyName: string;
  taxIDNumber: string;
  description: string;
  address: string;
  image: string;
  imagename: string;
  imageContent: string;
  taxIDs: [];
  ultimateParentEntity: string;
  parentEntity: string;
  companyEmail: string;
  country: string;
  state: string;
  industry: string;
  website: string;
  status: string;
  functionalCurrency: string;
  finStartDate: '';
  finEndDate: '';
}

export interface EntityProps {
  id?: number | null;
  companyName: string;
  taxIDNumber: string;
  description: string;
  address: string;
  companyEmail: string;
  phoneNumber: string;
  country: string;
  state: string;
  industry: string;
  website: string;
  image?: string | null;
  imagename?: string;
  imageContent?: string;
  functionalCurrency: string;
  finStartDate: Date | null;
  finEndDate: Date | null;
  isGroup: boolean;
  relatedPartyTrans: FieldItem[];
}

export interface CompanyProps {
  id?: number | null;
  companyName: string;
  companyEmail: string;
  imageContent?: string;
  image: string;
  isGroup: string;
  industry: string;
  address: string;
  country: string;
}
export interface UserProps {
  companyName: string;
  country: string;
  department: string;
  email: string;
  firstName: string;
  fullName: string;
  jobTitle: string;
  lastName: string;
  phoneNumber: string;
  roles: [];
  supervisorEmail: null;
  taxTypes: [];
  userName: string;
}

export interface TaxProps {
  id?: number | null;
  taxType: string;
  description: string;
  mnemonic: string;
  pseudoMnemonic: string;
  regulation: string;
}
export interface TaxForm {
  id?: number | null;
  taxName: string;
  description: string;
  mnemonic: string;
  pseudoMnemonic: string;
  regulation: string;
  dueDate: string;
  filingPeriod: string;
  computation: string;
  jurisdiction: string;
  isTaxPaid: boolean;
  requiredData: DataItem[];
  requiredDocuments: DocumentItem[];
}

export interface TaxDashboard {
  id?: number | null;
  tax: string;
  taxName: string;
  mnemonic: string;
  savedData: SavedItem[];
  computedData: ComputedItem[];
}

export type TaxDataInfo = {
  dataType: string;
  description: string;
  fieldName: string;
  isRequired: boolean;
  taxDataInfoId: number;
  value: string;
  index: number;
  isReviewed: boolean;
  id: number | string | undefined;
  name?: string;
};

export type fileDataType = {
  id: number;
  fileName: string;
  name: string;
  type: string;
  isApproved: boolean;
  uploadFileName: string;
  taxDocId: string;
  dataUrl: string | ArrayBuffer | null; // Base64 data URL for file preview
};
export type fileUpload = {
  DocId: number;
  TicketId: number;
  Document: ArrayBuffer | BinaryData | string;
  DocumentName: string;
};

export enum SystemRoles {
  SuperAdmin = 'SuperAdmin',
  Executive = 'Executive',
  Reviewer = 'Reviewer',
  User = 'User',
  Administrator = 'Administrator',
}

type UserImagesProps = {
  content: string;
  filename: string;
};
export interface MemberProps {
  id: number;
  email: string;
  fullname: string;
  jobTitle: string;
  role: string;
  userImage: UserImagesProps;
}

type ActivityOverview = {
  date: string;
  count: number;
};
type TicketStatusByPseudomnemonic = {
  mnemonic: string;
  percentage: string;
};
export interface AnalyticsProps {
  TicketStatus: any[] | undefined;
  TotalTickets: any;
  NoOfSubs: number;
  ReviewedTickets: any;
  OpenTickets: any;
  OverdueTickets: any;
  NoOfSubsidairy: any;
  AverageLogTime: string;
  NoOfUsers: number;
  NoOfRoles: number;
  NoOfTaxes: number;
  Activitylog: {
    active: string;
    inActive: string;
  };
  ActivityOverview: ActivityOverview[];
  TicketByStatus: {
    ticketCompletedInPercent: string;
    ticketInCompletedInPercent: string;
  };
  TicketStatusByPseudomnemonic: TicketStatusByPseudomnemonic[];
}
export interface SuperAdminAnalyticsProps {
  TicketStatus: any[] | undefined;
  CompanyBySector: any;
  Subsidiaries: any;
  CompanyActivities: any;
  Companies: number;

  CompanyByGeography: Array<{ country: string; count: number }>;
  GroupedCompanies: number;
  ReviewedTickets: number;
  SingleEntities: number;
  TicketByCompliance: Array<{ compliance: string; count: number }>;
  TotalTaxTypes: number;
  TotalTickets: number;
  openTickets: number;
  overdueTickets: number;
}

export interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

export type FormTypes = 'create' | 'edit' | 'view';

export interface SuperAdminForm {
  middleName: string;
  id: number | null;
  firstName: string;
  lastName: string;
  imageContent: string;
  email: string;
  clientId: number;
  department: string;
  jobTitle: string;
  roles: any[];
}

export interface BulkUploadProps {
  handleClose: () => void;
  refreshPage: () => void;
  downloadTemplate: () => void;
  uploadFile: (data: any) => any;
  getStatus: (data: any) => any;
  formLabels: {
    title: string;
    step1: string;
    step1Description: string;
    step2: string;
    step2Description: string;
    downloadButton: string;
    uploadButton: string;
    resetButton: string;
    uploadingText: string;
  };
  downloadLoading: boolean;
  uploadLoading: boolean;
  uploadSuccess: boolean;
  initialValues?: { file: string };
  Id?: any;
}
