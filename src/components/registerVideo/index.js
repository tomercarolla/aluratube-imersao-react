import {StyledRegisterVideo} from "./registerVideoStyles";
import {useState} from "react";

function userForm(formProps) {
    const [values, setValues] = useState(formProps.initialValues);

    return {
        values,
        handleChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;

            setValues({...values, [name]: value});
        },
        clearForm() {
            setValues({
                title: '',
                url: '',
            });
        }
    };
}

export default function RegisterVideo() {
    const [isModalShow, setModalShow] = useState(false);
    const registerForm = userForm({
        initialValues: {title: '', url: ''}
    });

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setModalShow(true)}>+</button>
            {
                isModalShow && (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        setModalShow(false);
                        registerForm.clearForm();
                        console.log(registerForm.values)
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setModalShow(false)}>x</button>

                            <input type="text" placeholder="Video title" value={registerForm.values.title}
                                   name="title"
                                   onChange={registerForm.handleChange}/>

                            <input type="text" placeholder="Url" value={registerForm.values.url}
                                   name="url"
                                   onChange={registerForm.handleChange}/>

                            <button type="submit">Register</button>
                        </div>
                    </form>
                )
            }
        </StyledRegisterVideo>
    )
}
