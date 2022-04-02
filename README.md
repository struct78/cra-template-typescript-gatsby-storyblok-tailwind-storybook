# cra-template-typescript-gatsby-storyblok-tailwind-storybook

# Features
* Typescript
* Gatsby
* Storyblok CMS
* Tailwind (CSS-in-JS)
* Storybook
* NVM

# Installation

```
$ npx create-react-app my-app --template cra-template-typescript-gatsby-storyblok-tailwind-storybook
```

# SSL Installation

```
$ brew install mkcert
$ mkcert -install
$ mkcert localhost
```

# Dependencies
To get started, ensure you have the following dependencies installed globally:
* [NVM](https://github.com/nvm-sh/nvm)


# Get Started

### Update Storyblok Token
Move .env.example to .env.development, and update the `GATSBY_STORYBLOK_TOKEN` variable to your preview token. This can be obtained in Storyblok by going to `Settings` -> `API Keys`

### Update to correct node version
```
nvm use
```

### Launch!
```
yarn develop
```

## Generating Types
Whenever you update your Storyblok schema, run the following commands to update your types locally:

```
yarn storyblok:pull
yarn storyblok:types
```

Your new types will be updated in `src/@types/storyblok.d.ts`