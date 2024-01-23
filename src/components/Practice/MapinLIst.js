import React from 'react'
import Table from 'react-bootstrap/Table';

export default function MapinLIst() {
    //list
    // let student = ["kiran", "shubham", "ahishek", "sanket", "bharat", "yogesh"]

    const student = [
        { name: "Kiran", Email: "Kiran1772002@gamil.com", rollno: 23, marks: 50 },
        { name: "Shubham", Email: "shubham123@gamil.com", rollno: 24, marks: 90 },
        { name: "Abhishek", Email: "Abhishek9090@gamil.com", rollno: 25, marks: 99 },
        { name: "Sanket", Email: " SanketPArhe122@gamil.com", rollno: 26, marks: 100 },
    ]

    student.map((item) => {
        console.log(item)
    })
    return (
        <div>
            <h1>hello</h1>
            <Table    >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                    <th>Marks</th>
                </tr>
                {
                    student.map((data , i) =>
                        data.marks >= '60'?
                        <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.Email}</td>
                        <td>{data.rollno}</td>
                        <td>{data.marks}</td>
                    </tr>:null
                    )
                }
            </Table>
        </div>
    )
}
