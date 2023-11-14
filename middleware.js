import { USER_ROUTES } from "./routes/routes";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    const token = request.cookies.get("token");
    const uid = request.cookies.get("uid");

    // if (!token) {
    //   return NextResponse.redirect(new URL("/ingresar", request.url));
    // }
    const res = await fetch(USER_ROUTES.renew, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token.value,
      },
      body: JSON.stringify({
        id: uid.value,
      }),
    });

    await res.json();
  } catch (error) {
    console.log(error.message);
    // return NextResponse.redirect(new URL("/ingresar", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/user/:path*",
};
