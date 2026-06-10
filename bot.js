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