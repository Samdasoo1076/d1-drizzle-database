export default {
	async fetch(request) {
	  return new Response("Welcome to your Cloudflare Worker!", {
		headers: { "Content-Type": "text/plain" },
	  });
	},
  };
  