import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState()

  const URL = `http://localhost:3000/registrations`;
  useEffect(() => {
    axios.get(URL).then(res => {
      setRegistrations(res.data)
    }).catch(() => {
      console.error('failed fetch')
    })
  }, [])

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
