import { Router, Redis } from "bot-router";
import * as config from "../config.json";
import { Telegraf } from "telegraf";

const TOKEN = config.token;
const MESSAGES = config.messages;
const BUTTONS = config.buttons;
const DOMAIN = config.domain;
const PORT = config.port;

const bot = new Telegraf(TOKEN);

const startBot = async () => {

    const redis = new Redis("redis://127.0.0.1:6379");

    await redis.init();

    const router = new Router({
        devMode: true,
        redis: redis
    });

    bot.use((ctx, next) => {
        return next();
    });

    bot.launch();
};

startBot();
