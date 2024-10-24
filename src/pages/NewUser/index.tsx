import { useState } from "react";
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
import { formatCPF } from "~/utils/format";

const NewUserPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const { mutate } = useMutation({
    mutationFn: postAdmissions,
    onSuccess: () => {
      history.push(routes.dashboard);
    },
    onError: () => {
      setErrorMessage(
        "Error ao criar um novo registro. Por favor tente novamente."
      );
    },
  });

  const onSubmit = (data: any) => {
    mutate({
      id: self.crypto.randomUUID(),
      admissionDate: data.date,
      email: data.email,
      employeeName: data.name,
      status: Status.REVIEW,
      cpf: formatCPF(data.cpf),
    });
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        {errorMessage ? <S.ErrorText>{errorMessage}</S.ErrorText> : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Nome"
            label="Nome"
            id="name"
            error={errors.name?.message}
            register={register("name", {
              required: "Nome é obrigatório",
              validate: {
                validName: (value) =>
                  /^[A-Za-z]{2,} [A-Za-z]+/.test(value) ||
                  "Nome deve ter pelo menos duas letras e um espaço.",
                startsWithLetter: (value) =>
                  /^[A-Za-z]/.test(value) ||
                  "O nome deve começar com uma letra.",
              },
            })}
          />
          <TextField
            placeholder="Email"
            label="Email"
            type="email"
            id="email"
            error={errors.email?.message}
            register={register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
            })}
          />
          <TextField
            placeholder="CPF"
            label="CPF"
            id="cpf"
            mask="999.999.999-99"
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
