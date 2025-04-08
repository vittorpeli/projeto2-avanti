function Form () {
    return (
        <>
            <form className="flex w-full max-w-md mb-8">
                <input 
                    type="text"
                    placeholder="Digite um usuário do Github"
                    className="w-full px-4 py-3 rounded-l-md focus:outline-none bg-gray-50 text-gray-950"
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
        </>
    )
}

export default Form;