import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes: [
        "/",
        "/execom",
        "/events/list",
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 