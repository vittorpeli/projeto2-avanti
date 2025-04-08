function User (props) {
    return (
        <div className="bg-gray-200 rounded-md p-6 flex flex-row md:flex-row items-center gap 6 w-full max-w-2xl">
          {/* Imagem do Perfil */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shrink-0 mr-6">
            <img 
              src={props.user.avatar_url} 
              alt={props.user.name}
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Nome e Descrição */}
          <div className="text-left md:text-left">
            <h2 className="text-blue-600 text-2xl font-semibold mb-2">{props.user.name ? props.user.name : props.user.login}</h2>
            <p className="text-black text-sm leading-relaxed">
                {props.user.bio}
            </p>
          </div>
        </div>
    )
}

export default User;