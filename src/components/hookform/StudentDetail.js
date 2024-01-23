import CancelIcon from "@mui/icons-material/Cancel";
import { Checkbox, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { Controller, set, useForm } from "react-hook-form";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",

    boxShadow: 24,

    p: 4,
};



export default function StudentDetail(Props) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        control,
        formState: { errors },
    } = useForm();

    const Submitdata = (objectdata) => {

        let Temparr = [...Props.tabledata];
        if (Props.editrow !== null) {

            let toupdateindex = Temparr.findIndex((item) => item["First Name"] === Props.editrow["First Name"])
            if (toupdateindex !== -1) {
                Temparr[toupdateindex] = objectdata;
                Props.setTabledata(Temparr)
                Props.modelclose();
            }


        } else {

            Temparr.push(objectdata);
            Props.setTabledata(Temparr);
            Props.modelclose();

            reset();
        }
    };
    useEffect(()=>{
        if (Props.editrow !== null) {
            setValue("First Name", Props.editrow["First Name"])
            setValue("Last Name", Props.editrow["Last Name"])
            setValue("Gender", Props.editrow["Gender"])
            setValue("Age" , Props.editrow["Age"] )
            setValue("Phone Number", Props.editrow["Phone Number"])
            setValue("Status" ,Props.editrow["Status"])
            setValue("Select" ,Props.editrow["Select"])
        }
    },[Props.editrow])


 

    return (
        <div>
            <Modal
                open={Props.modelopen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="h-[60%] rounded">
                    <di className="flex justify-between">
                        <h1>Student Detail</h1>
                        <div>
                            <button onClick={Props.modelclose}>
                                <CancelIcon sx={{ color: "red" }} />
                            </button>
                        </div>
                    </di>
                    <form onSubmit={handleSubmit(Submitdata)}>
                        <div className="flex space-x-2 mt-8 md:space-y-2">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Mr./Miss</InputLabel>
                                <Select
                                    sx={{ marginTop: "8px" }}
                                    labelId="demo-simple-select-label"
                                    size="small"
                                    id="demo-simple-select"
                                    {...register("Select")}
                                    label="Mr./Miss"
                                >
                                    <MenuItem value="Mr">Mr.</MenuItem>
                                    <MenuItem value="Miss">Miss.</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                size="small"
                                label="First Name"
                                fullWidth
                                name="First Name"
                                {...register("First Name")}
                            />
                            <TextField
                                size="small"
                                label="Last Name"
                                fullWidth
                                name="Last Name"
                                {...register("Last Name")}
                            />
                        </div>
                        <div className="mt-5">
                            <div className=" space-x-2 ">
                                <TextField
                                    size="small"
                                    label="Phone Number"
                                    name="Phone Number"
                                    {...register("Phone Number")}
                                />
                                <TextField
                                    size="small"
                                    label="Age"
                                    name="Age"
                                    {...register("Age")}
                                />
                                <Controller
                                    name="Status"
                                    control={control}
                                    render={({ field }) => <Checkbox {...field} />}
                                />
                            </div>
                            <h4 className=" mt-4">Gender</h4>
                            <div className=" space-x-3 flex mt-3">
                                <label htmlFor="male" className="flex">
                                    <input
                                        className="mt-2"
                                        {...register("Gender")}
                                        type="radio"
                                        value="Male"
                                        id="male"
                                    />
                                    <p className=" ml-4 mt-4">Male</p>
                                </label>
                                <label htmlFor="female" className="flex">
                                    <input
                                        className="mt-2"
                                        {...register("Gender")}
                                        type="radio"
                                        value="Female"
                                        id="female"
                                    />

                                    <p className=" ml-4 mt-4">  Female</p>
                                </label>
                                <label htmlFor="Others" className="flex">
                                    <input
                                        className="mt-2"
                                        {...register("Gender")}
                                        type="radio"
                                        value="Others"
                                        id="Others"
                                    />

                                    <p className=" ml-4 mt-4">Others</p>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-700 p-2 w-28 h-12  rounded text-white absolute left-[80%]">
                            {Props.editrow === null ? (<h4 className="">Save</h4>) : (<h4>Update</h4>)}

                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
