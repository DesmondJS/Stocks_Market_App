'use server';

import { connectToDatabase } from '@/database/mongoose';
import { Watchlist } from '@/database/models/watchlist.model';

// export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
//     if (!email) return [];

//     try {
//         const mongoose = await connectToDatabase();
//         const db = mongoose.connection.db;
//         if (!db) throw new Error('MongoDB connection not found');

//         // Better Auth stores users in the "user" collection
//         const user = await db.collection('user').findOne<{ _id?: unknown; id?: string; email?: string }>({ email });

//         if (!user) return [];

//         const userId = (user.id as string) || String(user._id || '');
//         if (!userId) return [];

//         const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
//         return items.map((i) => String(i.symbol));
//     } catch (err) {
//         console.error('getWatchlistSymbolsByEmail error:', err);
//         return [];
//     }
// }

type UpsertInput = {
    userId: string;
    symbol: string;
    company: string;
    category?: string;
};

export async function getWatchlist(userId: string) {
    await connectToDatabase();
    const docs = await Watchlist.find({ userId }).sort({ addedAt: -1 }).lean();
    return docs;
}

export async function getWatchlistSymbols(userId: string) {
    const docs = await getWatchlist(userId);
    return docs.map((d) => d.symbol);
}

// If you must keep the email API:
export async function getWatchlistSymbolsByEmail(email: string) {
    // Prefer: derive userId from session and call getWatchlistSymbols(userId)
    // If you *do* store email in userId, you can just:
    return getWatchlistSymbols(email);
}

export async function addToWatchlist(input: UpsertInput) {
    await connectToDatabase();
    const symbol = input.symbol.toUpperCase().trim();
    await Watchlist.updateOne(
        { userId: input.userId, symbol },
        {
            $setOnInsert: {
                userId: input.userId,
                symbol,
                company: input.company.trim(),
                category: input.category?.trim(),
                addedAt: new Date(),
            },
        },
        { upsert: true }
    );
    return { success: true };
}

export async function removeFromWatchlist(userId: string, symbol: string) {
    await connectToDatabase();
    await Watchlist.deleteOne({ userId, symbol: symbol.toUpperCase().trim() });
    return { success: true };
}

export async function patchWatchlistItem(
    userId: string,
    symbol: string,
    updates: Partial<Pick<UpsertInput, "company" | "category">>
) {
    await connectToDatabase();
    const $set: Record<string, string> = {};
    if (typeof updates.company === "string") $set.company = updates.company.trim();
    if (typeof updates.category === "string") $set.category = updates.category.trim();
    if (!Object.keys($set).length) return { success: true };

    const res = await Watchlist.updateOne(
        { userId, symbol: symbol.toUpperCase().trim() },
        { $set }
    );
    if (res.matchedCount === 0) {
        return { success: false, message: "Item not found" };
    }
    return { success: true };
}