import {StyledRegisterVideo} from "./registerVideoStyles";
import {useState} from "react";
import {createClient} from "@supabase/supabase-js";

const PROJECT_URL = "https://crblweakcywcnwavqrmg.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyYmx3ZWFrY3l3Y253YXZxcm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNzA3MTksImV4cCI6MTk4Mzk0NjcxOX0.ge4ohsJ046XlXcXPJwAaWkCGGao0r-XqbPa3r0gpJqk";

const supabase = createClient(PROJECT_URL, KEY);

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


export default function RegisterVideo() {
    const [isModalShow, setModalShow] = useState(false);
    const registerForm = useForm({
        initialValues: {title: '', url: ''}
    });

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setModalShow(true)}>+</button>
            {
                isModalShow && (
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        supabase.from("video").insert({
                            title: registerForm.values.title,
                            url: registerForm.values.url,
                            thumb: getThumbnail(registerForm.values.url),
                            playlist: "games"
                        }).then();

                        setModalShow(false);
                        registerForm.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => {
                                setModalShow(false);
                                registerForm.clearForm();
                            }}>x
                            </button>

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

function useForm(formProps) {
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
