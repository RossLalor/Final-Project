import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
publicRoutes: ["/", "/about", "/page", "/charts", "/electricCars", "/Research", "/wander", "/hvo"],
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};