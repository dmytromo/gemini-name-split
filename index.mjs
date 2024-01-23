#!/usr/bin/env node

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const args = process.argv;

async function run() {
let country, fullName;
  if (args[2] === '-i') {
    const rl = readline.createInterface({ input, output });
    country = await rl.question('Please input the country in ISO2 format: ');
    console.log(`Your country is: ${country}`);
    fullName = await rl.question('Input the full name in national format? ');
    console.log(`Your input is: ${fullName}`);
    rl.close();
  } else {
    country = args[2];
    fullName = args[3];
  }
  
  if (!country || !fullName) {
    console.error('Empty country or full name');
    return;
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please split a ${country} full name: ${fullName} into first and last names and add translit in latin letters. If it contain middle name please add it into result as well. Output please in JSON format`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(text);
  } catch (error) {
    console.error(error.message || 'Error during processing Gemini request');
  }
}

run();
