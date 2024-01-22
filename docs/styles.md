[← Назад](../README.md)

# Стили

> Для стилизации компонентов используем подход **CSS-in-JS**.
> В качастве библиотеки реализующей данный подход иcпользуем [Emotion](https://emotion.sh/docs/introduction)

### Правила написания стилей
1. Для стилизации компонентов создаем отдельный файл **styles.ts** в папке компонента

   ```
   └──  LoginForm/
      ├── index.tsx
      └── styles.ts
   ```
2. Не используем слово **Styled** в названии стилизованного компонента
3. Чтобы стилизовать компонент необходимо использовать метод **styled** из библиотеки [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) 
    

### Пример стилизации компонента: 

#### **`styles.ts`**
```typescript filename="styles.ts"
import styled from "@emotion/styled";
import Button from "@ui/Button";

export const SubmitButton = styled(Button)`
    background: #333;
    color: #444;
`;

export const LoginInput = styled.input`
    border-color: red;
`;
```

#### **`index.tsx`**
```typescript jsx filename="index.tsx"
import { SubmitButton, LoginInput } from "./styles.ts";

const LoginForm = () => {
    
    return (
        <form>
            <LoginInput type="text" name="login" />
            <input type="password" name="password" />
            <SubmitButton type="submit">Войти</SubmitButton>
        </form>
    );
};

export default LoginForm;
```