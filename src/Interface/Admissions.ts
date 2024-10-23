export enum Status {
  REVIEW = "REVIEW",
  APPROVED = "APPROVED",
  REPROVED = "REPROVED",
}

export type AdmissionStatus = {
  status: Status;
};

export type AdmissionData = {
  id: string;
  admissionDate: string;
  email: string;
  employeeName: string;
  status: Status;
  cpf: string;
};
