export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch("http://127.0.0.1:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    const response = await fetch("http://127.0.0.1:8000/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: "Failed to get users" }, { status: 500 });
  }
}
