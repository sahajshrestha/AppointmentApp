import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.patient.upsert({
      create: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
      },
      where: {email: 'john.doe@example.com'},
      update: {}
  });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })