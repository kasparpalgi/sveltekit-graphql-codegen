// @ts-nocheck
import { AsyncUsers } from 'sveltekit-graphql-codegen';


/** */
export async function load() {
    try {
        let query = await AsyncUsers({});

        console.log('query', query.data.users.map(user => user.id));
    } catch (error) {
        console.log('error', error);
    }
}