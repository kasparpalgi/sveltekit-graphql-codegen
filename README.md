# SvelteKit GraphQL Codege with Apollo

Separate package with Svelte 3 to use coegen. Reason for this is that it was a terrible hassle to get the codegen working with Svelte 4 so kept using Svelte 3. Don't want to keep using Svelte 3 once the 5 comes out and don't want to spend time every time new Svelte version comes out. So, the idea is to keep codegenseparate and working well doesn't matter what Svelte version is used.

Tested with [Hasura](https://medium.com/crewnew-com/hasura-api-engine-elm-lets-go-bug-free-rapid-app-development-4f9630280d72) only because it's the best and I use it on every project🙂😊

Use yarn `npm install --global yarn` (maybe npm works sometimes, too) and then: `yarn install`, `yarn dev`, `yarn codegen`

## ToDo

Subscriptions have to be implemented
