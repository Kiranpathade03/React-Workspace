import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useCallback, useState } from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormControl } from 'react-bootstrap'


function Form() {
  const [formdata, setFormData] = useState([])
  console.log("form data", formdata);
  const schema = yup.object({

    FirstName: yup.string().required("Enter a First Name"),
    MiddleName: yup.string().required("Enter a Middle Name"),
    LastName: yup.string().required("Enter a Last Name"),
    Age: yup.number().max(16, "Age must be less tahn 15").required("Enter a Age"),
    Gender: yup.string().required("Select Gender"),
    BirthDate: yup.date().required("Enter Date"),
    ParentfirstName: yup.string().required("Enter Parent Name"),
    ParentlastName: yup.string().required("Enter Parent Last Name"),
    Address: yup.string().required("Enter Address"),
    City: yup.string().required("Enter a City"),
    Region: yup.string().required("Enter Region"),
    PostalZipCode: yup.number().required("Enter a Postal Code "),
    Country: yup.string().required("Enter a Contry Name"),
    Phone:yup.number().max(10, " Invalid Phone Number").required("Enter Phone Number"),
    Email:yup.string().email("Invalid Email").required("Enter Email")
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback((data) => {
    console.log("data", data);
    setFormData(data)
  }, [onsubmit,formdata])
  return (
    <div className='text-center mx-2 mx-auto w-1/2'>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='gap-x-3 mt-12 space-y-3 '>
          <h4>School Admission Form</h4>
          <div className='flex space-x-4 '>
            <TextField fullWidth size='small' name='FirstName' label='First Name'
              {...register('FirstName')}
              helperText={errors.FirstName?.message}
              error={errors.FirstName?.message}

            />

            <TextField fullWidth size='small' name='MiddleName' label='Middle Name'
              {...register('MiddleName')}
              error={errors.MiddleName?.message}
              helperText={errors.MiddleName?.message}
            />
          </div>
          <TextField fullWidth size='small' name='LastName' label='Last Name'
            {...register('LastName')}
            error={errors.LastName?.message}
            helperText={errors.LastName?.message}
          />
          <div className='flex space-x-4 '>
            <TextField fullWidth size='small' name='Age' label='Age'
              {...register('Age')}
              error={errors.Age?.message}
              helperText={errors.Age?.message}
            />


            <div className=''>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              label="Gender"
              fullWidth
              size='small'
              {...register('Gender')}
              error={errors.Gender?.message}
              helperText={errors.Gender?.message}
            >
              <MenuItem value='Male'>Male</MenuItem>
              <MenuItem value='Female'>Female</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
            </div>

          </div>

          <TextField fullWidth size='small' name='Class' label='Class You want to Apply for'
            {...register('Class')}

          />

          <TextField fullWidth size='small' type='date' name='BirthDate' label=' '
            {...register('BirthDate')}
            error={errors.BirthDate?.message}
            helperText={errors.BirthDate?.message}
          />

          <div className=' flex space-x-4'>
            <TextField fullWidth size='small' name='ParentfirstName' label='Parent First Name'
              {...register('ParentfirstName')}
              error={errors.ParentfirstName?.message}
              helperText={errors.ParentfirstName?.message}

            />
            <TextField fullWidth size='small' name='ParentlastName' label='Parent Last Name'
              {...register('ParentlastName')}
              error={errors.ParentlastName?.message}
              helperText={errors.ParentlastName?.message}


            />
          </div>

          <TextField fullWidth size='small' name='Address' label='Street Address'
            {...register('Address')}
            error={errors.Address?.message}
            helperText={errors.Address?.message}
          />

          <div className='flex space-x-4'>
            <TextField fullWidth size='small' name='City' label='City'
              {...register('City')}
              error={errors.City?.message}
              helperText={errors.City?.message}
            />
            <TextField fullWidth size='small' name='Region' label='Region'
              {...register('Region')}
              error={errors.Region?.message}
              helperText={errors.Region?.message}
            />
          </div>
          <div className='flex space-x-4'>
            <TextField fullWidth size='small' name='PostalZipCode' label='Postal Zip Code'
              {...register('PostalZipCode')}
              error={errors.PostalZipCode?.message}
              helperText={errors.PostalZipCode?.message}
            />
            <TextField fullWidth size='small' name='Country' label='Country'
              {...register('Country')}
              error={errors.Country?.message}
              helperText={errors.Country?.message}
            />
          </div>
          <TextField fullWidth size='small' name='Phone' label='Phone' type='number' 
          {...register('Phone')} 
          error={errors.Phone?.message}
          helperText={errors.Phone?.message}

          />
          <TextField fullWidth size='small' name='Email' label='Email' 
          {...register('Email')} 
          error={errors.Email?.message}

        helperText={errors.Email?.message}
          />
           


          <button className='bg-green-800 text-white rounded p-2 w-full' type='submit'> Submit</button>
        </div>
      </form>
    </div>
  )
}

export default React.memo(Form)