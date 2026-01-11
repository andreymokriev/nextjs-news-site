import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const nid = searchParams.get('header');

    if (!nid) {
        return NextResponse.json({ error: 'Missing required parameter: header' }, { status: 400 });
    }

    try {
        let num_id = Number(nid)
        // Запрос к базе данных для получения записей по заголовку
        const data = await prisma.newstable.findFirst({
            where: { id: num_id },
            select: {
                content: true,
                image: true,
                date: true,
            },
        });

        if (!data) {
            return NextResponse.json({ error: 'No data found' }, { status: 404 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
