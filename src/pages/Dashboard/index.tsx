import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmissions, fetchAdmissionsByCpf } from "~/api/Admissions";
import { useSearch } from "~/hooks/useSearch";

const DashboardPage = () => {
  const { searchValue } = useSearch();

  const { data } = useQuery({
    queryKey: ["admissions"],
    queryFn: fetchAdmissions,
  });

  const { data: dataFilter } = useQuery({
    queryKey: ["admissionsByFilter", searchValue],
    queryFn: () => fetchAdmissionsByCpf(searchValue),
    enabled: searchValue.length === 11
  });

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={searchValue.length !== 11 ? data : dataFilter} />
    </S.Container>
  );
};
export default DashboardPage;
