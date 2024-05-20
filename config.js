import discord
from discord.ext import commands
import asyncio

TOKEN = "YOUR_DISCORD_TOKEN"
GUILD_ID = 1234567890  # احتفظ برقم معرف الخادم الخاص بك هنا

intents = discord.Intents.default()
intents.members = True

bot = commands.Bot(command_prefix="/", intents=intents)


@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")


@bot.command()
@commands.has_permissions(administrator=True)
async def close_room(ctx):
    guild = bot.get_guild(GUILD_ID)
    for voice_channel in guild.voice_channels:
        if voice_channel.id != ctx.channel.id:
            await voice_channel.set_permissions(ctx.guild.default_role, connect=False)
    await ctx.send("تم إغلاق جميع الغرف الصوتية.")


@bot.command()
@commands.has_permissions(administrator=True)
async def open_room(ctx):
    guild = bot.get_guild(GUILD_ID)
    for voice_channel in guild.voice_channels:
        await voice_channel.set_permissions(ctx.guild.default_role, connect=True)
    await ctx.send("تم فتح جميع الغرف الصوتية.")

import discord
from discord.ext import commands

TOKEN = "YOUR_DISCORD_TOKEN"
GUILD_ID = 1234567890  # احتفظ برقم معرف الخادم الخاص بك هنا

bot = commands.Bot(command_prefix="/")


@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")


@bot.command()
async def send_embed(ctx):
    embed = discord.Embed(
        title="عنوان الرسالة المدمجة",
        description="وصف الرسالة المدمجة",
        color=discord.Color.blue()
    )
    embed.add_field(name="حقل 1", value="محتوى حقل 1", inline=False)
    embed.add_field(name="حقل 2", value="محتوى حقل 2", inline=False)
    embed.set_footer(text="هذا نص التذييل")

    await ctx.send(embed=embed)

import discord
from discord.ext import commands

TOKEN = "YOUR_DISCORD_TOKEN"
GUILD_ID = 1234567890  # احتفظ برقم معرف الخادم الخاص بك هنا

bot = commands.Bot(command_prefix="/")


@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")


@bot.command()
async def show_roles(ctx):
    guild = bot.get_guild(GUILD_ID)
    created_roles = []
    deleted_roles = []

    for role in guild.roles:
        if role.created_at:
            created_roles.append(role.name)
        else:
            deleted_roles.append(role.name)

    embed = discord.Embed(title="الرتب المنشأة", color=discord.Color.green())
    embed.description = "\n".join(created_roles) if created_roles else "لا توجد رتب منشأة"
    await ctx.send(embed=embed)

    embed = discord.Embed(title="الرتب المحذوفة", color=discord.Color.red())
    embed.description = "\n".join(deleted_roles) if deleted_roles else "لا توجد رتب محذوفة"
    await ctx.send(embed=embed)


import discord
from discord.ext import commands

TOKEN = "YOUR_DISCORD_TOKEN"
GUILD_ID = 1234567890  # احتفظ برقم معرف الخادم الخاص بك هنا

bot = commands.Bot(command_prefix="/")


@bot.event
async def on_ready():
    print(f"Logged in as {bot.user.name}")


@bot.command()
async def count_bots(ctx):
    guild = bot.get_guild(GUILD_ID)
    bot_count = sum(1 for member in guild.members if member.bot)

    embed = discord.Embed(title="عدد البوتات في الخادم", color=discord.Color.blue())
    embed.description = f"عدد البوتات: {bot_count}"
    await ctx.send(embed=embed)


