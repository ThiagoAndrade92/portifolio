import { CepImg, cepScreens } from "../../assets/images/cep";
import { LoginImg, loginScreens } from "../../assets/images/login";
import { TodoImg, todoScreens } from "../../assets/images/todo";

export const projects = [
   {
      id: 1,
      title: "Login",
      images: loginScreens,
      alt: "login e cadastro de usuários",
      preview: LoginImg.LoginTelaInicial,
      btn1: "https://thiagoandrade92.github.io/login/",
      btn2: "https://github.com/ThiagoAndrade92/login",
      li1: "JavaScript, HTML, CSS",
      li2: "Login e cadastro de usuários",
      li3: "Sessão persistente com Local Storage",
      li4: "Controle de autenticação",
   },
   {
      id: 2,
      title: "Todo",
      images: todoScreens,
      alt: "aplicação de lista de tarefas",
      preview: TodoImg.TarefasTelaInicial,
      btn1: "https://thiagoandrade92.github.io/toDo/",
      btn2: "https://github.com/ThiagoAndrade92/toDo",
      li1: "React + TypeScript",
      li2: "Gerenciamento de estado com Context e reducer",
      li3: "Inicialização lazy e persistência local",
      li4: "Arquitetura previsível estilo Redux",
   },
   {
      id: 3,
      title: "CEP",
      images: cepScreens,
      alt: "aplicação de consulta de CEP",
      preview: CepImg.CepTelaInicial,
      btn1: "https://thiagoandrade92.github.io/buscador-cep/",
      btn2: "https://github.com/ThiagoAndrade92/buscador-cep",
      li1: "Vanilla JS com manipulação direta do DOM",
      li2: "Consumo de API REST (ViaCEP)",
      li3: "async/await e tratamento de exceções",
      li4: "Validação de entrada do usuário" ,
   },
];