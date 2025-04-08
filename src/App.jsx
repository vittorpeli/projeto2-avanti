function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-center">
          <img 
            src="/src/assets/github-logo.svg" 
            alt="Github Logo"
            className="w-12 h-12 mr-2" 
          />
          <h1 className="text-4x1 text-white">
            Perfil <strong>Github</strong>
          </h1>
        </div>
      </header>

      {/* Form */}
      <form>
        <input 
        type="text"
        placeholder="Digite um usuário do Github"
        />
        <button>
          <img src="/src/assets/search-icon.svg" alt="Search Icon" />
        </button>
      </form>
    </div>
  )
}

export default App
