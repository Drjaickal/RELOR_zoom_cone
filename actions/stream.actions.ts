'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const STREAM_API_KEY = process.env.STREAM_API_KEY; // ✅ FIXED
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    try {
        const user = await currentUser();

        if (!user) throw new Error('User not authenticated');
        if (!STREAM_API_KEY) throw new Error('Stream API key missing');
        if (!STREAM_API_SECRET) throw new Error('Stream API secret missing');

        const streamClient = new StreamClient(
            STREAM_API_KEY,
            STREAM_API_SECRET
        );

        // ✅ CORRECT TOKEN GENERATION
        const token = streamClient.createToken(user.id);

        return token;
    } catch (err) {
        console.error("Token Provider Error:", err);
        throw err;
    }
};