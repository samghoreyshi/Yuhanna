// app/api/send-sms/route.js
export async function POST(req) {
    try {
      const body = await req.json();
      const response = await fetch("https://api.payamakapi.ir/api/v1/SMS/Send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.SMS_API_KEY, // کلید API از متغیرهای محیطی
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.ok ? 200 : response.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  