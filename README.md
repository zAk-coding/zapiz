# 🚀 ZAPIZ - v1.0.1

**Zapiz** is a WhatsApp bot library focused on simplicity. Install it, scan the QR Code, and get your bot running in minutes.

---

## ✨ Features

* 📱 QR Code authentication
* 👥 Group management
* 🛡️ Admin controls
* 🗑️ Message deletion
* ⚡ Simple and fast to use
* 🚀 Ready out of the box

---

## 📋 Available Commands

Send `!menu` in any group:

```text
┌─ Zapiz Bot
├ !adm @      - Promote Admin
├ !unadm @    - Remove Admin
├ !ban @      - Remove Member
├ !unmsg      - Delete Message
├ !close      - Close Group
├ !open       - Open Group
├ !menu       - View Commands
└────────────
```

| Command        | Description                         | Permission |
| -------------- | ----------------------------------- | ---------- |
| `!menu`        | Display all available commands      | Everyone   |
| `!adm @user`   | Promote a user to admin             | Admin      |
| `!unadm @user` | Remove admin privileges             | Admin      |
| `!ban @user`   | Remove a group member               | Admin      |
| `!unmsg`       | Delete a replied message            | Admin      |
| `!close`       | Close the group for regular members | Admin      |
| `!open`        | Reopen the group                    | Admin      |

---

## ⚙️ Requirements

| Requirement | Version      |
| ----------- | ------------ |
| Node.js     | 20 or higher |

> **Important:** Check your Node.js version by running:

```bash
node --version
```

The output must be **v20.0.0** or higher.

---

## 📦 Installation

### 1. Create a project folder

```bash
mkdir my-bot
cd my-bot
```

### 2. Initialize the project

```bash
npm init -y
```

### 3. Install Zapiz

```bash
npm install @zak-coding/zapiz
```

### 4. Create your bot file

Create a file named `bot.js`:

```js
import { createBot } from '@zak-coding/zapiz';

const bot = await createBot({
    authFolder: 'my-auth'
});

bot.on('ready', () => {
    console.log('✅ Bot connected!');
    console.log(`
Commands:
===========================

!adm @     - Promote Admin
!unadm @   - Remove Admin
!ban @*    - Remove Member
!unmsg*    - Delete Message
!close     - Close Group
!open      - Open Group

===========================
`);
});

bot.on('group-participants-update', async (data) => {
    if (data.action === 'add') {
        for (const user of data.participants) {
            const name = user.split('@')[0];

            await bot.sock.sendMessage(data.groupId, {
                text: \`Hello, @\${name} ✨\n> Welcome to the group\`,
                mentions: [user]
            });
        }
    }
});

bot.start();
```

### Or download the example project and run it directly using `bot.js`.

---

### 5. Start the bot

```bash
node bot.js
```

---

## 📱 Connecting to WhatsApp

When the bot starts, a QR Code will be displayed in the terminal.

### How to connect

1. Open WhatsApp on your phone
2. Go to **Settings**
3. Tap **Linked Devices**
4. Tap **Link a Device**
5. Scan the QR Code displayed in the terminal

After authentication:

```text
✅ Account connected successfully.
📜 Type !menu in any group.
```

---

## 👥 Adding the Bot to a Group

1. Add the connected number to a group
2. Promote the bot to administrator
3. Send:

```text
!menu
```

That's it! Zapiz is now ready to use.

---

## 📁 Project Structure

```text
my-bot/
├── my-auth/
├── node_modules/
├── bot.js
├── package.json
└── package-lock.json
```

The `my-auth` folder is created automatically and stores your WhatsApp session.

---

## ❓ Troubleshooting

### QR Code does not appear

Make sure you are using Node.js 20 or newer.

### The bot does not respond

Verify that the bot has administrator permissions in the group.

### Want to connect another account?

Delete the authentication folder:

**Windows**

```bash
rmdir /s /q my-auth
```

**Linux / macOS**

```bash
rm -rf my-auth
```

Then start the bot again:

```bash
node bot.js
```

---

==================================================================
                          🇧🇷 PORTUGUÊS
==================================================================

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
