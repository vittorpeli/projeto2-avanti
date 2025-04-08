import { useState } from 'react'
import Form from './components/Form'
import User from './components/User'

function App() {
  const [userData, setUserData] = useState({});

  function saveUserData(data) {
    setUserData(data);
  }

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
        <Form saveUserData={saveUserData}/>


        {/* Search Results */}
        {userData.login && <User user={userData} />}

      </div>
    </div>
  )
}

export default App
