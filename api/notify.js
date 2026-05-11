// notify.js — resend ready, env var configured
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(500).json({ error: "Server configuration error" });

  const d = req.body || {};
  let subject, html;

  if (d.type === "quote") {
    subject = "New Quote Request: " + (d.company || "Unknown");
    html = quoteHtml(d);
  } else if (d.type === "contact") {
    subject = "New Contact Form: " + (d.name || "Unknown");
    html = contactHtml(d);
  } else {
    return res.status(400).json({ error: "Unknown notification type" });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "2Flow Website <noreply@updates.2flow.ie>",
        to:   ["brendan.hughes@2flow.ie", "eve.martin@2flow.ie", "joe.pleass@cyclone.ie"],
        reply_to: d.email || undefined,
        subject,
        html,
      }),
    });
    const result = await r.json();
    if (!r.ok) return res.status(500).json({ error: result });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

function row(label, value) {
  if (!value) return "";
  return "<tr><td style='padding:8px 16px 8px 0;font-size:13px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;width:160px'>"
    + label + "</td><td style='padding:8px 0;font-size:14px;color:#111827;vertical-align:top'>" + value + "</td></tr>";
}

function wrap(title, colour, body) {
  return "<!DOCTYPE html><html><body style='margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif'>"
    + "<table width='100%' cellpadding='0' cellspacing='0'><tr><td align='center' style='padding:40px 20px'>"
    + "<table width='560' cellpadding='0' cellspacing='0' style='background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)'>"
    + "<tr><td style='background:" + colour + ";padding:28px 32px'>"
    + "<p style='margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.7)'>2Flow Website</p>"
    + "<h1 style='margin:8px 0 0;font-size:20px;font-weight:700;color:#fff'>" + title + "</h1>"
    + "</td></tr>"
    + "<tr><td style='padding:32px'><table width='100%' cellpadding='0' cellspacing='0'>" + body + "</table></td></tr>"
    + "<tr><td style='padding:16px 32px 24px;border-top:1px solid #f3f4f6'>"
    + "<p style='margin:0;font-size:12px;color:#9ca3af'>Sent from <a href='https://2flow.ie' style='color:#5CB800;text-decoration:none'>2flow.ie</a></p>"
    + "</td></tr></table></td></tr></table></body></html>";
}

function quoteHtml(d) {
  var rows = row("Company", d.company) + row("Name", d.firstname + " " + d.lastname)
    + row("Email", d.email) + row("Phone", d.phone) + row("Website", d.website)
    + row("Monthly orders", d.orders) + row("SKU count", d.skus)
    + row("Pallets / month", d.pallets) + row("Product category", d.category)
    + row("Timeline", d.timeline);
  return wrap("New Quote Request", "#0D1A2E", rows);
}

function contactHtml(d) {
  var rows = row("Name", d.name) + row("Email", d.email)
    + row("Phone", d.phone) + row("Company", d.company)
    + row("Message", d.message ? d.message.replace(/\n/g, "<br>") : "");
  return wrap("New Contact Form", "#5CB800", rows);
}
