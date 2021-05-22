<p align="center"><a href="https://laravel.com" target="_blank"><img src="http://ecoopay.com.br/public/img/logo-ecoopay.png" width="400"></a></p>



## About API ECOOPAY

API para gerenciamento de crédito projeto em Laravel 8 e banco de dados em mysql.

Projeto desenvolvido por:
Vinicius Melo - Dev
Daniel Costa - Dev
Bruno Rocha - Design

## Startando o projeto

Agora você vai ir pra o diretório raiz do projeto e executar os seguintes comandos:

    composer install

Copiar o .env.example para .env

    cp .env.example .env

Agora vai precisar rodar algumas com o Artisan:

    php artisan key:generate


    php artisan migrate --seed

Agora você vai deixar sua aplicação online:

    php artisan serve

## API endpoints:

As consultas para api são feitas pelo endereço:

    localhost:8000/api/ ou https://www.ecoopay.com.br/api/

-------------------------------------------
## /User:
Criar novo usuário:
   

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
