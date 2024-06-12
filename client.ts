// The Client is isolated in this small file so that it could be mocked upon testing 
// Probably also facilitates Dependency Injection. 

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default prisma