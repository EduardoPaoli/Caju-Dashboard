import axios, { isAxiosError } from "axios";
import { AdmissionData } from "~/Interface/Admissions";

const API = "http://localhost:3000";
const API_URL = `${API}/registrations/`;

export const fetchAdmissions = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const postAdmissions = async (data: AdmissionData) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const patchAdmissions = async ({
  id,
  cardStatus,
}: {
  id: string;
  cardStatus: any;
}) => {
  try {
    await axios.patch(`${API_URL}${id}`, {
      status: cardStatus,
    });
  } catch (error) {
    handleError(error);
  }
};

export const deleteAdmissions = async ({ id }: { id: string }) => {
  try {
    await axios.delete(`${API_URL}${id}`);
  } catch (error) {
    handleError(error);
  }
};

export const fetchAdmissionsByCpf = async (cpf: string) => {
  try {
    const { data } = await axios.get(`${API_URL}?cpf=${cpf}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    console.error("Axios error:", error.message);
    throw new Error(error.response?.data.message || "Erro desconhecido");
  } else {
    console.error("Erro desconhecido:", error);
    throw new Error("Erro desconhecido");
  }
};
