import React, { useState } from "react";
import Card from'../UI/Card';
import Button from'../UI/Button';
import classes from'./AddUser.module.css';
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
const [enteredUser,setEnteredUser] = useState('');
const [enteredAge,setEnteredAge] = useState('');
const[error,setError]=useState();
const UserNameHandler = (e) =>
{
console.log('name');
setEnteredUser(e.target.value);

}
const UserAgeHandler = (e) =>
{
console.log('age');
setEnteredAge(e.target.value);

}
const ErrorHandler =()=>
{
    setError(null);
}
const SubmitFormHandler =(e)=>
{
e.preventDefault();
if(enteredUser.trim().length === 0 ||enteredAge.trim().length === 0)
{
setError(
    {
        title:'Invalid Input',
        message:'plz enter a age and value(non-empty values)'
    }
);
return;
}

if(+enteredAge < 1)
{
    setError(
        {
            title:'Invalid Value',
            message:'plz enter a age greater than 1'
        }
    );
    return;
}

setEnteredAge('');
setEnteredUser('');
console.log(enteredUser,enteredAge);
props.onAddUser(enteredUser,enteredAge);


}
  return (
    <div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={SubmitFormHandler} className='form-control'>
        <label htmlFor="name">User</label>
      <input id="name" type="text" value={enteredUser}  onChange={UserNameHandler}/>
    <label htmlFor="age">Age (Year)</label>
      <input  type="number" value={enteredAge} onChange={UserAgeHandler} />
      <Button  type="submit">
      AddUser
      </Button>
    </form>
    
    </Card>
    </div>
  );
};

export default AddUser;
