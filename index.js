import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.typing = False
intents.presences = False

bot = commands.Bot(command_prefix='/', intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name} ({bot.user.id})')

@bot.command()
async def hello(ctx):
    await ctx.send('Hello, there!')

@bot.command()
async def echo(ctx, *, message):
    await ctx.send(message)

# قم بتعريف مزيد من السلاش كوماندز هنا

import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.typing = False
intents.presences = False

bot = commands.Bot(command_prefix='/', intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name} ({bot.user.id})')
    print('Bot is ready and online')
    print('------')

@bot.command()
async def status(ctx):
    embed = discord.Embed(title='Bot Status', description='I am online and ready to assist!', color=discord.Color.green())
    await ctx.send(embed=embed)

bot.run('YOUR_BOT_TOKEN')
