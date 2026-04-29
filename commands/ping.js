export async function sendPing(bot, chatId, botStartTime) {
  const start = Date.now();

  const sent = await bot.sendMessage(
    chatId,
    "🏓 Mengukur kecepatan bot..."
  );

  const ping = Date.now() - start;
  const uptime = Math.floor(
    (Date.now() - botStartTime) / 1000
  );

  await bot.editMessageText(
    `🏓 *PONG!*\n\n⚡ Speed: \`${ping} ms\`\n⏱ Uptime: \`${uptime}s\``,
    {
      chat_id: chatId,
      message_id: sent.message_id,
      parse_mode: "Markdown"
    }
  );
}
