import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  check: async ({ cookies, request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
    console.log(password);
    // console.log("2333333");
    // if (email === "hello@webjeda.com" && password === "password") {
    //   cookies.set("access", "true", {
    //     maxAge: 10,
    //     path: "/",
    //     sameSite: "strict",
    //   });
    //   throw redirect(302, "/dashboard");
    // }

    return {
      email,
      message: "Email or password is not valid",
    };
  },
};
