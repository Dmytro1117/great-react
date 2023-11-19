# 08-phonebook(jwt)

- Створений репозиторій `08-phonebook(jwt)`.
- При здачі домашньої роботи є посилання на вихідні файли та робочі сторінки
  кожного проекту на `GitHub Pages`.
- При запуску коду завдання, в консолі немає помилок та попереджень.
- Для кожного компонента є окрема папка з файлом компонента React та файлом
  стилів.
- Для компонентів описано `propTypes`.

## Книга контактів

Візьми своє рішення завдання з попередньої домашньої роботи і додай у програму
можливість реєстрації, логіна та оновлення користувача, а також роботу з
приватною колекцією контактів.

#### Бекенд

Для цього завдання є готовий бекенд. Ознайомся з
[документацією](https://connections-api.herokuapp.com/docs/). Він підтримує всі
необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення
користувача за допомогою 'JWT'. Використовуй його замість твого бекенда
створеного через сервіс 'mockapi.io'.

#### Маршрутизація

Додай маршрутизацію з бібліотекою `React Router`. У програмі має бути кілька
сторінок:

- `/register` - публічний маршрут реєстрації нового користувача з формою.
- `/login` - публічний маршрут логіна існуючого користувача з формою.
- `/contacts` - приватний маршрут для роботи зі списком контактів користувача.

Додай компонент навігації `Navigation` з посиланнями для переходу по маршрутах.

#### Меню користувача

Створи компонент `UserMenu`, що відображає пошту користувача і кнопку виходу з
облікового запису. Ось як може виглядати його розмітка.

```
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

#### Стилізація

Це фінальна версія програми, тому попрацюй над оформленням інтерфейсу. Можна
використовувати бібліотеку стилізації або компонентів, наприклад
[Chakra UI](https://chakra-ui.com/) або [Material UI](https://mui.com/).
