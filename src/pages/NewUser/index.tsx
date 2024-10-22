import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { useForm } from "react-hook-form";
import { postAdmissions } from "~/api/Admissions";
import { useMutation } from "@tanstack/react-query";
import { Status } from "~/Interface/Admissions";

const NewUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const { mutate } = useMutation({mutationFn: postAdmissions});

  const onSubmit = (data: any) => {
    mutate({
      id: self.crypto.randomUUID(),
      admissionDate: data.date,
      email: data.email,
      employeeName: data.name,
      status: Status.REVIEW,
      cpf: data.cpf
    });
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Nome"
            label="Nome"
            id="name"
            error={errors.name?.message}
            register={register("name", { required: "Nome é obrigatório" })}
          />
          <TextField
            placeholder="Email"
            label="Email"
            type="email"
            id="email"
            error={errors.email?.message}
            register={register("email", { required: "Email é obrigatório" })}
          />
          <TextField
            placeholder="CPF"
            label="CPF"
            id="cpf"
            register={register("cpf", { required: "CPF é obrigatório" })}
          />
          <TextField
            label="Data de admissão"
            type="date"
            id="date"
            register={register("date", { required: "Data é obrigatória" })}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
