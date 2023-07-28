import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
export async function POST(req:NextRequest , res:NextResponse) {
  const body = await req.json()
  await prisma.contactMessage.create({
    data: {
        name:body.name,
        phoneNumber:body.phoneNumber,
        email:body.email,
        message:body.message,
    }
    }
  )
  return NextResponse.json('Ok')
}