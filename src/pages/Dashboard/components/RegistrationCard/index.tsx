import { useCallback } from "react";
import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { patchAdmissions, deleteAdmissions } from "~/api/Admissions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AdmissionData, AdmissionStatus, Status } from "~/Interface/Admissions";

interface Props {
  data: AdmissionData;
};

const RegistrationCard = (props: Props) => {
  const {
    data: { id, employeeName, email, admissionDate, status },
  } = props;

  const queryClient = useQueryClient();
  const update = useMutation({
    mutationFn: patchAdmissions,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["admissions"] });
      queryClient.refetchQueries({ queryKey: ["admissionsByFilter"] });
    },
  });

  const getStatus = useCallback((cardStatus: any) => {
    update.mutate({ id, cardStatus });
  }, []);

  const remove = useMutation({
    mutationFn: deleteAdmissions,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["admissions"] });
      queryClient.refetchQueries({ queryKey: ["admissionsByFilter"] });
    },
  });

  const deleteItem = useCallback(() => {
    remove.mutate({ id });
  }, []);

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {status !== Status.REPROVED ? (
          <ButtonSmall
            bgcolor="rgb(255, 145, 154)"
            onClick={() => getStatus(Status.REPROVED)}
          >
            Reprovar
          </ButtonSmall>
        ) : null}
        {status !== Status.APPROVED ? (
          <ButtonSmall
            bgcolor="rgb(155, 229, 155)"
            onClick={() => getStatus(Status.APPROVED)}
          >
            Aprovar
          </ButtonSmall>
        ) : null}
        {status !== Status.REVIEW ? (
          <ButtonSmall
            bgcolor="#ff8858"
            onClick={() => getStatus(Status.REVIEW)}
          >
            Revisar
          </ButtonSmall>
        ) : null}

        <S.DeleteButton onClick={() => deleteItem()}>
          <HiOutlineTrash />
        </S.DeleteButton>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
