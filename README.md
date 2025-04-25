ToDo List App
Веб-приложение для управления списком дел, построенное на микросервисной архитектуре.

Установка
Клонируйте репозиторий: git clone https://github.com/username/todo-list1.git
Перейдите в каталог проекта: cd todo-list-app
Установите зависимости: docker-compose build
Запустите приложение: docker-compose up
Структура проекта
auth-service/ - Сервис аутентификации
task-service/ - Сервис управления задачами
user-service/ - Сервис управления пользователями
gateway/ - API-шлюз
frontend/ - Фронтенд-приложение
database/ - Скрипты для базы данных
docs/ - Документация
Технологии
Backend: TypeScript, Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Database: PostgreSQL
Контейнеризация: Docker
