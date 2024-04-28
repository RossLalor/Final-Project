import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({

publicRoutes: ["/", "/about", "/page", "/charts", "/electricCars", "/Research", "/wander", "/hvo", "/electric", "/safety"],
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};