function Error () {
    return(
        <div className="bg-gray-200 rounded-md p-6 text-center">
          <p className="text-red-500 font-medium text-xl">
          Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente
          </p>
        </div>
    )
}

export default Error;