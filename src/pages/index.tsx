function Index() {
  return (
    <div>
      <div className="flex flex-row bg-stone-300">
        <div
          className="flex flex-col h-screen
        justify-center space-y-4 w-1/2 pl-5 text-lg"
        >
          <h1 className="text-8xl">Olá, Bem Vindo!</h1>
          <p>
            Me chamo João Victor, atualmente
            tenho 22 Anos e estudo Desenvolvimento Web desde 2020.
          </p>
          <p>
            Sinta-se a vontade para a explorar meu portfólio,
            e se gostar do que viu, ou tiver observações a fazer, me avise.
          </p>
        </div>
        <div className="w-1/2">
          <div className="flex h-screen items-center justify-center">
            <img
              src="./public/images/jv.png"
              alt="Imagem de João Victor"
              className="h-1/2 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center bg-stone-300 text-lg">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl text-center">Skills</h1>
          <h2 className="text-3xl">Soft Skills</h2>
          <ul className="list-disc grid grid-cols-2">
            <li>Liderança</li>
            <li>Resolução de problemas</li>
            <li>Comunicação Efetiva</li>
            <li>Trabalho em Equipe</li>
            <li>Adaptabilidade</li>
            <li>Gestão do Tempo</li>
            <li>Pensamento Crítico</li>
            <li>Inglês</li>
          </ul>
          <h2 className="text-3xl">Hard Skills</h2>
          <div className="flex justify-between max-w-2xl flex-wrap">
            <img
              src="./images/html.png"
              alt=""
              className="max-h-40"
            />
            <img
              src="./public/images/CSS3.png"
              alt="CSS-logo"
              className="max-h-40"
            />
            <img
              src="./public/images/javascript.png"
              alt="Javascript-logo"
              className="max-h-40"
            />
            <img
              src="./images/git.png"
              alt=""
              className="max-h-40"
            />
            <img
              src="./public/images/react.png"
              alt="react-logo"
              className="max-h-40"
            />
            <img
              src="./images/redux.png"
              alt=""
              className="max-h-40"
            />
            <img
              src="./images/node.png"
              alt=""
              className="max-h-40"
            />
            <img
              src="./images/mysql.png"
              alt=""
              className="max-h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
