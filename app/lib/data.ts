import prisma from '@/app/lib/prisma'
import { unstable_noStore as noStore} from 'next/cache'

export async function getAllNews() {
    noStore();
    try {
        const data = await prisma.newstable.findMany();
        return data
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Failed to fetch news data")
    }
}