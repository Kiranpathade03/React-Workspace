import React from 'react'
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import EducationInfo from './EducationInfo';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useForm ,FormProvider } from 'react-hook-form';

function UseFormContext() {
    const schema = yup.object({
        firstname:yup.string().required("Enter a firstname"),
        middlename:yup.string().required("Enter a Middle Name"),
        lastname:yup.string().required("Enter a last name"),
        prefix:yup.string().required(),
        Contry:yup.string().required("Enter a Contry"),
        District:yup.string().required("Enter a District"),
        Village:yup.string().required("ENter a Village"),
        collegename:yup.string().required("Enter a collegename"),
        yearofpassing:yup.string().max(4).required("Enter a yearofpassing"),
        percentage12th:yup.string().required("Enter a percentage"),
        collegenameOfgraduation:yup.string().required("Enter a college Name Of Graduation")



    })

    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log("asdfghjk", data);
    }


    return (
        <div className=' w-1/2 mx-auto mt-16'>

            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <FormProvider {...methods}>

                    <PersonalInfo />
                    <Address />
                    <EducationInfo />

                </FormProvider>

                <button className='bg-black text-white p-2 rounded mt-4' type='submit'>Add Data</button>
            </form>
        </div>
    )
}

export default UseFormContext