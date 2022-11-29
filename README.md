O Cat-Menager é uma aplicação criada em Angluar.js e SpringBoot para um projeto da faculdade

# Atenção

Caso você pretenda rodar essa aplicação na sua maquina, você precisara das sequintes coisas:
- Um jdk, recomendamos o 17 por ser o mais estável atualmente;
- Uma IDE que compile código java, recomendamos o Intellij, pois com ele você pode até instalar o jdk se não tiver instalado;
- postgresql;
- node;
- angular instalado;

Tendo os requerimentos acima, você terá que clonar o projeto para sua maquina

Para para que o front end do projeto seja executável, será necessário o seguinte comando na pasta frontend
> npm install @angular/cli 


# Como Rodar o projeto
Depois de "Rodar" o Back-end do projeto na IDE escolhida por você pode acessar a aplicação via browser com o frontend em agular, vá ao terminal e rode o seguinte comando
>ng serve -o --poll=2000

Nisso você vai no browser (caso ele não tenha sido aberto automaticamente) e acessa a seguinte url:
> http://localhost:4200/
