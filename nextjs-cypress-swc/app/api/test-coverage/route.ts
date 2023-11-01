import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export async function GET() {
  let responseData = {};
  
  if (global.__coverage__) {
    responseData = {coverage: global.__coverage__};
  }

  return NextResponse.json(responseData);
}