export async function GET({ params, request }) {
  console.log(params, request);
  return new Response(
    JSON.stringify({
      name: "example",
      url: "courses.career-ready.io",
    }),
  );
}
