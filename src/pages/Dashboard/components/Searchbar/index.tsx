import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSearch } from "~/hooks/useSearch";
import { formatCPF } from "~/utils/format";

export const SearchBar = () => {
  const history = useHistory();
  const { setSearchValue } = useSearch();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const queryClient = useQueryClient();
  const reload = useCallback(() => {
    setSearchValue('')
    queryClient.refetchQueries({ queryKey: ["admissions"] });
  }, [queryClient]);

  const handleInputChange = (e: { target: { value: string }; }) => {
    const formatedCPF = formatCPF(e.target.value)
    setSearchValue(formatedCPF);
  };

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        onChange={handleInputChange}
        mask="999.999.999-99"
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={reload}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
