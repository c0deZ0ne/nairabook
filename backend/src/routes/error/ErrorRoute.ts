export default function Error(req: any, res: any, next: any) {
  try {
    if (req.url == "/*") return res.render("home");
    throw "error";
  } catch (error) {
    next({ code: 404, message: "end of page" });
    
  }
}
