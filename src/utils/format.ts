export const formatCPF = (value: string) => {
  return value.replace(/\D/g, "");
};

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};
