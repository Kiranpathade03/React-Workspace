import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import TextField from "@mui/material/TextField"
import * as yup from "yup"




export default function Form() {
  const schema = yup.object().shape({
    FirstName: yup.string().required("Required"),

  });

  const {
    control,
    trigger,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    // defaultValues,
  });
  console.log("erorrs", errors);
  const SubmitData = (dataObj) => {
    console.log("data", dataObj);
    trigger()
  };
  return (
    <form  >


      <div>

        <input type="checkbox" name="checkbox" {...register('checkbox')} />
        <TextField sx={{ p: 1 }} {...register('FirstName')} error={errors.FirstName} name="Fname" size='small' label="First Name" />
        <input type="submit" onClick={SubmitData} />

      </div>

    </form>
  )
}