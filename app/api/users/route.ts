import { NextResponse } from "next/server";

// Simulated user data - in a real application, you would use a database
const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

// GET /api/users - Get all users
export async function GET() {
  return NextResponse.json(users);
}

// POST /api/users - Create a new user
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create new user (in a real app, would save to database)
    const newUser = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
    };

    // Add to users array (simulating database insertion)
    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { error: "Invalid request body", details: errorMessage },
      { status: 400 }
    );
  }
}
