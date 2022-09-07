/**
 * Background Function triggered by a change to a Firebase Auth user object.
 *
 * @param {!Object} event The Cloud Functions event.
 */
exports.helloAuth = event => {
    try {
        console.log(`Function triggered by change to user: ${event.uid}`);
        console.log(`Created at: ${event.metadata.createdAt}`);

        if (event.email) {
            console.log(`Email: ${event.email}`);
        }
    } catch (err) {
        console.error(err);
    }
};