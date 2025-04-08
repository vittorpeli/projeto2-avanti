import Form from "./components/Form"

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-[url('assets/background-img.png')]">
      <div className="bg-black bg-opacity-90 rounded-sm p-8 gap-x-2 flex flex-col items-center justify-center w-full max-w-2xl max-h-2xl">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-center">
            <img 
              src="/src/assets/github-logo.svg" 
              alt="Github Logo"
              className="w-12 h-12 mr-2" 
            />
            <h1 className="text-4xl text-white">
              Perfil <strong>Github</strong>
            </h1>
          </div>
        </header>

        {/* Form */}
        <Form />


        {/* Search Results */}
        <div className="bg-gray-200 rounded-md p-6 flex flex-row md:flex-row items-center gap 6 w-full max-w-2xl">
          {/* Imagem do Perfil */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shrink-0 mr-6">
            <img 
              src="/src/assets/github-logo.svg" 
              alt="Perfil"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Nome e Descrição */}
          <div className="text-left md:text-left">
            <h2 className="text-blue-600 text-2xl font-semibold mb-2">Nome</h2>
            <p className="text-black text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit quam a nisl consequat, at suscipit arcu viverra. Proin vel velit eget risus vestibulum pretium vitae eu ex. Cras rutrum porta fermentum. In cursus nisl id eros pretium, ac dapibus nisl efficitur. Pellentesque nisi diam, cursus quis enim blandit, placerat efficitur risus. Suspendisse maximus ante vitae sem semper</p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-md p-6 text-center">
          <p className="text-red-500 font-medium text-xl">
          Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
