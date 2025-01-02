const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Security-Policy': "script-src * 'unsafe-inline' 'unsafe-eval';",
  };
  export default {
    async fetch(request, env) {
      const { pathname } = new URL(request.url);
  
      // OPTIONS 요청 처리 (CORS 지원)
      if (request.method === "OPTIONS") {
        return new Response(null, { headers });
      }
  
      try {
        // GET 요청: 고객 데이터 조회
        if (pathname === "/api/beverages" && request.method === "GET") {
          const results = await env.DB.prepare("SELECT * FROM Customers").all();
          return new Response(JSON.stringify(results), { headers });
        }
  
        // POST 요청: 고객 데이터 삽입
        if (pathname === "/api/beverages" && request.method === "POST") {
          const body = await request.json(); // 요청 본문 파싱
          const { CustomerId, CompanyName, ContactName } = body;
  
          if (!CustomerId || !CompanyName || !ContactName) {
            return new Response(
              JSON.stringify({ error: "Missing required fields" }),
              { status: 400, headers }
            );
          }
  
          // 데이터 삽입
          await env.DB.prepare(
            "INSERT INTO Customers (CustomerId, CompanyName, ContactName) VALUES (?, ?, ?)"
          )
            .bind(CustomerId, CompanyName, ContactName)
            .run();
  
          return new Response(
            JSON.stringify({ success: true, message: "Customer added" }),
            { status: 201, headers }
          );
        }
  
        return new Response("Invalid endpoint or method", { status: 404, headers });
      } catch (error) {
        return new Response("Error occurred: " + error.message, {
          status: 500,
          headers,
        });
      }
    },
  };
  