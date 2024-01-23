# Full name split with Google Gemini AI

Here is CLI app to split Full name into First, Last and Middle names
based on nationality with Google Gemini AI API

## Instalation

1. **Clone the repo:**

    **HTTPS**

    ```sh
    git clone https://github.com/dmytromo/gemini-name-split.git
    ```

    **or SSH**

    ```sh
    git clone git@github.com:dmytromo/gemini-name-split.git
    ```

2. **Install dependencies:**

    ```sh
    npm ci
    ```

3. **Update env**
    Copy `.env.exmple` file to `.env` file.

    ```sh
    cp .env.example .env
    ```

4. **Generate Gemini API key**
Follow the instruction [Gemini API key](https://makersuite.google.com/app/apikey), generate the key.
Update value of `GOOGLE_AI_KEY` in `.env` file.

## How to use

There are 2 ways of using this small CLI app.
**interactive** - with `-i` flag as argument, app will ask you input Country and then Full name.
**declarative** - one line input, `<country> "<fullname>"`

### Examples

1. declarative:

    ```sh
    node --env-file=.env index.mjs UA "Leontovych Mykola Dmytrovych"
    ```

    output will be like:

    ```json
    {
    "first_name": "Mykola",
    "middle_name": "Dmytrovych",
    "last_name": "Leontovych",
    "first_name_translit": "Mykola",
    "middle_name_translit": "Dmytrovych",
    "last_name_translit": "Leontovych"
    }
    ```

2. interacive:

    ```sh
    node --env-file=.env index.mjs -i
    Please input the country in ISO2 format: UA
    Your country is: UA
    Input the full name in national format? Mykola Dmytrovych Leontovych
    Your input is: Mykola Dmytrovych Leontovych
    ```

### Standalone bin app

Also you can use it as an executable script.
With `npm link` we can link our package to local registry, `"bin"` parameter of `package.json` will explain which script needs to be run.
After that you'll be able to run app just typing `name-split`.

```sh
npm link
export $(cat .env | xargs)
name-split UA "Leontovych Mykola Dmytrovych"
```
