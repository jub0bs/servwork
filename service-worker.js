self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === "/foobar") {
    event.respondWith(
      new Response("hello world", {
        headers: {
          "Content-Type": "text/plain",
        },
      })
    );
  }
});
