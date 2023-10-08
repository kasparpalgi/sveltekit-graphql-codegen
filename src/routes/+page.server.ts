import { AsyncUsers } from 'svelte-hasura-codegen';


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        let query = await AsyncUsers({});

        console.log('query', query.data.users.map(user => user.id));
    } catch (error) {
        console.log('error', error);
    }
}