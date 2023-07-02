// // import React from 'react'
// import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button"
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";

// const Modal = ({ open, setOpen, type, currentData }) => {
//     const [data, setData] = useState({
//         email: "",
//         password: "",
//         // gender: "",
//         hobbies: []
//     });

//     // const hobby = [
//     //     { name: "car' },
//     //     { name: bike' },
//     //     { name: 'truck' }
//     // ]

//     // const changeData = (e) => {
//     //     const { name, value } = e.target;
//     //     setData({
//     //         ...data,
//     //         [name]: value,
//     //     });
//     //     // alert(`${name} ${value}`)
//     // };

//     const changeData = (e) => {
//         const { name, value, type, checked } = e.target;
//         setData((prevData) => ({
//             ...prevData,
//             [name]:
//                 type === "checkbox"
//                     ? handleCheckboxChange(value, checked, prevData.hobbies)
//                     : value,
//         }));
//     };

//     const handleCheckboxChange = (name, checked, hobbies) => {
//         if (checked) {
//             return [...hobbies, name];
//         } else {
//             return hobbies.filter((hobby) => hobby !== name);
//         }
//     };

//     const addData = () => {

//         // if (data !== null) {
//         //     alert("All field must be required..!");
//         //     return;
//         // }

//         let allData = JSON.parse(localStorage.getItem("data")) || [];
//         if (type == "create") {
//             data.id = Date.now();
//             allData.push(data);
//             localStorage.setItem("data", JSON.stringify(allData));
//             setOpen(false);
//             setData({
//                 email: '',
//                 password: '',
//                 gender: ''
//             })
//         } else {
//             const findId = allData.find((item) => item.id === currentData.id);
//             findId.email = data.email;
//             findId.password = data.password;
//             findId.gender = data.gender;
//             localStorage.setItem("data", JSON.stringify(allData));
//             setOpen(false);
//             setData({
//                 email: '',
//                 password: '',
//                 gender: ''
//             })
//         }
//     }

//     useEffect(() => {
//         if (type === "update" && currentData) {
//             setData({
//                 email: currentData.email,
//                 password: currentData.password,
//                 gender: currentData.gender,
//                 // hobby: currentData.hobby
//             });
//         } else {
//             setData({
//                 email: "",
//                 password: "",
//                 gender: ""
//             });
//         }
//     }, [type, currentData, open]);

//     // const handleChange = event => {
//     //     const target = event.target
//     //     const name = target.name
//     //     const value = target.value
//     //     setData({
//     //         ...data,
//     //         [name]: value
//     //     })
//     //     // alert(`${name} ${value}`)
//     // }

//     return (
//         <>
//             <Dialog open={open} onClose={() => setOpen(false)}>
//                 <DialogTitle>{type.toUpperCase()} DATA</DialogTitle>
//                 <DialogContent>
//                     <div className="row d-flex">
//                         <div className="col-12">
//                             <label>
//                                 Email<span className="text-danger">*</span>
//                             </label>
//                             <div className="input-group py-2">
//                                 <input type="text" className="form-control" placeholder="Enter Username" name="email" onChange={changeData} value={data.email} required />
//                             </div>
//                         </div>
//                         <div className="col-12 mt-3">
//                             <label>
//                                 Password<span className="text-danger">*</span>
//                             </label>
//                             <div className="input-group py-2">
//                                 <input type="text" className="form-control" placeholder="Enter Username" name="password" onChange={changeData} value={data.password} required />
//                             </div>
//                         </div>
//                         {/* <div className="col-12 mt-3">
//                             <input type="radio" name="gender" value="male" onChange={changeData} checked={data.gender == "male"} />
//                             <label>
//                                 Male<span className="text-danger">*</span>
//                             </label>
//                             &nbsp;&nbsp;&nbsp;&nbsp;

//                             <input type="radio" name="gender" value="female" onChange={changeData} checked={data.gender == "female"} />
//                             <label>
//                                 Female<span className="text-danger">*</span>
//                             </label>
//                         </div> */}

//                         <div>
//                             <label>Hobbies:</label>
//                             <div>
//                                 <label htmlFor="hobbyReading">
//                                     <input type="checkbox" id="hobbyReading" name="hobbies" value="reading" checked={data.hobbies.includes("reading")} onChange={changeData} />
//                                     Reading
//                                 </label>
//                             </div>
//                             <div>
//                                 <label htmlFor="hobbySports">
//                                     <input type="checkbox" id="hobbySports" name="hobbies" value="sports" checked={data.hobbies.includes("sports")} onChange={changeData} />
//                                     Sports
//                                 </label>
//                             </div>
//                         </div>

//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpen(false)}>Cancel</Button>
//                     <Button onClick={addData}>{type}</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }

// export default Modal

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({ open, setOpen, currentData, type }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        gender: '',
        hobbies: [],
    });

    const changeData = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]:
                type === "checkbox"
                    ? handleCheckboxChange(value, checked, prevData.hobbies)
                    : value,
        }));
    };

    const handleCheckboxChange = (name, checked, hobbies) => {
        if (checked) {
            return [...hobbies, name];
        } else {
            return hobbies.filter((hobby) => hobby !== name);
        }
    };

    const addData = () => {
        let allData = JSON.parse(localStorage.getItem("data")) || [];
        if (type === "create") {
            data.id = Date.now();
            allData.push(data);
            localStorage.setItem("data", JSON.stringify(allData));
            setOpen(false);
        } else {
            const findId = allData.find((item) => item.id === currentData.id);
            findId.email = data.email;
            findId.gender = data.gender;
            findId.password = data.password;
            findId.hobbies = data.hobbies;
            localStorage.setItem("data", JSON.stringify(allData));
            setOpen(false);
        }
    };

    useEffect(() => {
        if (type === "update" && currentData) {
            setData({
                email: currentData.email,
                gender: currentData.gender,
                password: currentData.password,
                hobbies: currentData.hobbies,
            });
        } else {
            setData({
                email: "",
                password: "",
                gender: "",
                hobbies: [],
            });
        }
    }, [type, currentData, open]);
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{type.toUpperCase()} DATA</DialogTitle>
                <DialogContent>
                    <div className="row d-flex">
                        <div class="col-12">
                            <label>
                                Email<span class="text-danger">*</span>
                            </label>
                            <div class="input-group py-2">
                                <input type="text" class="form-control" placeholder="Enter Username" name="email" onChange={changeData} value={data.email} />
                            </div>
                        </div>
                        <div class="col-12 mt-3">
                            <label>
                                Password<span class="text-danger">*</span>
                            </label>
                            <div class="input-group py-2">
                                <input type="text" class="form-control" placeholder="Enter Username" name="password" onChange={changeData} value={data.password} />
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <input type="radio" name="gender" value="male" onChange={changeData} checked={data.gender == "male"} />
                            <label>
                                Male<span className="text-danger">*</span>
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" name="gender" value="female" onChange={changeData} checked={data.gender == "female"} />
                            <label>
                                Female<span className="text-danger">*</span>
                            </label>
                        </div>
                        <div>
                            <label>Hobbies:</label>
                            <div>
                                <label htmlFor="hobbyReading">
                                    <input type="checkbox" id="hobbyReading" name="hobbies" value="reading" checked={data.hobbies.includes("reading")} onChange={changeData} />
                                    Reading
                                </label>
                            </div>
                            <div>
                                <label htmlFor="hobbySports">
                                    <input type="checkbox" id="hobbySports" name="hobbies" value="sports" checked={data.hobbies.includes("sports")} onChange={changeData} />
                                    Sports
                                </label>
                            </div>
                        </div>




                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={addData}>{type}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Modal;
