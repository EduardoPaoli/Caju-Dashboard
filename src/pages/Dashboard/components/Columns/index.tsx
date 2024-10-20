import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";

const allColumns = [
  { status: "REVIEW", title: "Revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

type Props = {
  registrations?: any[];
};
const Collumns = ({ registrations }: Props) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrations?.map((registration) =>
                  registration.status === collum.status ? (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  ) : null
                )}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
