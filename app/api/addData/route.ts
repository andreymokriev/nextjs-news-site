import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const { newHeader, newContent, newImage, newDate } = await req.json();
        
        if (!newHeader || !newContent || !newImage || !newDate) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await prisma.newstable.create({
            data: {
                header: newHeader,
                content: newContent,
                image: newImage,
                date: newDate,
            },
        });

        return NextResponse.json({ message: 'Data added successfully', data: result }, { status: 200 });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
