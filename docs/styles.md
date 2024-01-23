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

export const PasswordInput = styled.input`
    border-color: black;
`;
```

#### **`index.tsx`**
```typescript jsx filename="index.tsx"
import { SubmitButton, LoginInput, PasswordInput } from "./styles.ts";

const LoginForm = () => {
    
    return (
        <form>
            <LoginInput type="text" name="login" />
            <PasswordInput type="password" name="password" />
            <SubmitButton type="submit">Войти</SubmitButton>
        </form>
    );
};

export default LoginForm;
```

### Примеры работы с темой: 

#### **`Внутри метода styled`**
```typescript filename="styles.ts"
import styled from "@emotion/styled";
import Button from "@ui/Button";

export const SubmitButton = styled(Button)`
    background: #${({ theme }) => theme.colors.dark[1]};
    color: ${({ theme }) => theme.colors.gray[6]};
`;
```

#### **`На уровне компонента`**
```typescript filename="styles.ts"
import styled from "@emotion/styled";

export const StyledGrid = styled('p', {
   shouldForwardProp: (prop) => !["color"].includes(prop),
})<{ color: string }>`
   color: ${({ color }) => color};
`;

export const Wrapper = styled.div`
   display: flex;
   gap: 4px;
`;
```

```typescript jsx filename="index.tsx"
import { useMantineTheme } from "@ui/theme";

import type { FC } from "react";

import { StatusIcon } from "./StatusIcon";
import { StatusText, Wrapper } from "./styles";

const DeliveryStatus:FC<{ isActive: boolean; statusText: string }> = ({ isActive, statusText }) => {
   const theme = useMantineTheme()
   const textColor = isActive ? theme.colors.gray[6] : theme.colors.gray[2];

   return (
      <Wrapper>
          <StatusIcon />
          <StatusText color={textColor}>{statusText}</StatusText>
      </Wrapper>
   );
};

export default LoginForm;
```