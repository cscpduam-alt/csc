export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "cscpduam-alt.github.io") {
    url.hostname = "csc.pduam.dpdns.org";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}