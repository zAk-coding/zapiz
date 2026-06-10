# 🚀 ZAPIZ - v1.0.1

**Zapiz** é uma biblioteca para criação de bots de WhatsApp focada em simplicidade. Instale, escaneie o QR Code e comece a utilizar seu bot em poucos minutos.

---

## ✨ Recursos

* 📱 Conexão via QR Code
* 👥 Gerenciamento de grupos
* 🛡️ Controle de administradores
* 🗑️ Exclusão de mensagens
* ⚡ Simples e rápida de usar
* 🚀 Pronta para uso

---

## 📋 Comandos Disponíveis

Envie `!menu` em qualquer grupo:

```text
┌─ Zapiz Bot
├ !adm @      - Promover Administrador
├ !unadm @    - Remover Administração
├ !ban @      - Remover Membro
├ !unmsg      - Apagar Mensagem
├ !close      - Fechar Grupo
├ !open       - Abrir Grupo
├ !menu       - Ver Comandos
└────────────
```

| Comando           | Descrição                            | Permissão |
| ----------------- | ------------------------------------ | --------- |
| `!menu`           | Exibe todos os comandos disponíveis  | Todos     |
| `!adm @usuario`   | Promove um usuário a administrador   | Admin     |
| `!unadm @usuario` | Remove a administração de um usuário | Admin     |
| `!ban @usuario`   | Remove um membro do grupo            | Admin     |
| `!unmsg`          | Apaga uma mensagem respondida        | Admin     |
| `!close`          | Fecha o grupo para membros comuns    | Admin     |
| `!open`           | Reabre o grupo                       | Admin     |

---

## ⚙️ Requisitos

| Requisito | Versão         |
| --------- | -------------- |
| Node.js   | 20 ou superior |

> **Importante:** Verifique sua versão do Node.js executando:

```bash
node --version
```

O resultado deve ser **v20.0.0** ou superior.

---

## 📦 Instalação

### 1. Criar uma pasta para o projeto

```bash
mkdir meu-bot
cd meu-bot
```

### 2. Inicializar o projeto

```bash
npm init -y
```

### 3. Instalar o Zapiz

```bash
npm install @zak-coding/zapiz
```

### 4. Criar o arquivo do bot

Crie um arquivo chamado `bot.js`:

```js
import { createBot } from '@zak-coding/zapiz';

const bot = await createBot({
    authFolder: 'my-auth'
});

bot.on('ready', () => {
    console.log('✅ Bot conectado!');
    console.log(`
Comandos:
===========================

!adm @ - Promover Admin
!unadm @ - Rebaixar
!ban @* - Remover Membro
!unmsg* - Apagar Mensagem
!close - Fechar
!open - Abrir Grupo
===========================
`);
});

bot.on('group-participants-update', async (data) => {
    if (data.action === 'add') {
        for (const user of data.participants) {
            const nome = user.split('@')[0];
            
            await bot.sock.sendMessage(data.groupId, {
                text: `Olá, @${nome} ✨\n> Seja Bem vindo(a)`,
                mentions: [user]
            });
        }
    }
});

bot.start();
```
### Alternativamente, baixe o projeto pronto e inicie através do arquivo `bot.js`.
---

### 5. Iniciar o bot

```bash
node bot.js
```

---

## 📱 Conectando ao WhatsApp

Ao iniciar o bot, um QR Code será exibido no terminal.

### Como conectar

1. Abra o WhatsApp no celular
2. Acesse **Configurações**
3. Toque em **Dispositivos conectados**
4. Toque em **Conectar dispositivo**
5. Escaneie o QR Code exibido no terminal

Após a autenticação:

```text
✅ Conta conectada com sucesso.
📜 Digite !menu em qualquer grupo.
```

---

## 👥 Adicionando o bot ao grupo

1. Adicione o número conectado ao grupo
2. Promova o bot para administrador
3. Execute:

```text
!menu
```

Pronto! O Zapiz já estará funcionando.

---

## 📁 Estrutura do Projeto

```text
meu-bot/
├── auth/
├── node_modules/
├── bot.js
├── package.json
└── package-lock.json
```

A pasta `auth` é criada automaticamente e armazena sua sessão do WhatsApp.

---

## ❓ Solução de Problemas

### O QR Code não aparece

Verifique se está utilizando Node.js 20 ou superior.

### O bot não responde

Certifique-se de que ele possui permissões de administrador no grupo.

### Deseja conectar outra conta?

Remova a pasta de autenticação:

**Windows**

```bash
rmdir /s /q auth
```

**Linux / macOS**

```bash
rm -rf auth
```

Depois execute novamente:

```bash
node bot.js
```

---

## 📄 Licença

MIT License

---

## 👨‍💻 Autor

**zAk-coding**
