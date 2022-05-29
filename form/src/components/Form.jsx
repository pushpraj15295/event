import React, { useState } from 'react'

const Form = () => {
  
    const [form , setForm] = useState({

        // username:"",
        // email:"",
        // password:"",
        // age:0,
        // isIndian:false,
    })

    const handeOnChange =(e) =>{
        let {type,name,value,checked,files} =e.target;

        if(type === "checkbox"){
            setForm({
                ...form,
                [name]:checked,
            })
        }
        else if(type === "file"){
            setForm({
                ...form,
                [name]:files,
            });
        }
        else{

            setForm({
                ...form,
                [name]:value
            })

        }
        
    }

  const handelOnsubmit=(e)=>{
      e.preventDefault();
      console.log(form);
  }

  return (
    <div>Form
       <form onSubmit = {handelOnsubmit}>
        <div>
            <label>Name:</label>
            <input type="text" 
            name="username"
            placeholder='Enter Name...'
            value={form.username}
            onChange={handeOnChange}
            />
        </div>
        <br />
        <div>
            <label>Age:</label>
            <input type="age" 
            name="age"
            placeholder='Enter age...'
            value={form.age}
            onChange={handeOnChange}
            />
        </div>
        <br />
        <div>
            <label>Password:</label>
            <input type="text" 
            name="password"
            placeholder='Enter password...'
            value={form.password}
            onChange={handeOnChange}
            />
        </div>
        <br />
        <div>
            <label>Is Indian:</label>
            <input type="checkbox" 
            name="isIndian"
            checked={form.isIndian}
            onChange={handeOnChange}
            />
        </div>
        <br />
          
        <div>
            <label>Male:</label>
            <input type="radio" 
            name="gender"
             value="Male"
            onChange={handeOnChange}
            />
            <label>Female:</label>
            <input type="radio" 
            name="gender"
            value="Female"
            onChange={handeOnChange}
            />
        </div>

        <br />
        <div>
           <label>city :</label>
           <select name="city" 
           value={form.city}
            onChange={handeOnChange}
            >
                <option value=""></option>
            <option value="rewa">Rewa</option>
            <option value="satna">Satna</option>
            <option value="bhopal">Bhopal</option>
            <option value="jabalpur">Jabalpur</option>
            <option value="indere">Indore</option>
            <option value="shidi">Shidhi</option>
            <option value="shahdol">Shahdol</option>

            </select>
             
        </div>
        <br />
        <div>
            <label>User Resume : </label>
            <input
             type="file" 
            name="resume"
            accept='image/png, image/jpeg, application/pdf'
            files={form.resume}
            onChange={handeOnChange}
            />
        </div>
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>


  )
}

export default Form