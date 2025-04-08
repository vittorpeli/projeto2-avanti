import { useState } from "react";
import Error from "./Error";

function Form (props) {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
        if(data.message === "Not Found") {
            setError(true);
        }else {
            setError(false);
            props.saveUserData(data);
            setUsername("");
        }
        });
    }

    function handleChange(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchUserData(username);
    }

    return (
        <>
            <form 
                className="flex w-full max-w-md mb-8"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder="Digite um usuário do Github"
                    className="w-full px-4 py-3 rounded-l-md focus:outline-none bg-gray-50 text-gray-950"
                    value={username}
                    onChange={handleChange}
                />
                <button 
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 px-4 rounded-r-md">
                        <img 
                        src="/src/assets/search-icon.svg" 
                        alt="Search Icon" 
                        className="w-6 h-6"
                        />
                </button>
            </form>
            {error && <Error />}
        </>
    )
}

export default Form;