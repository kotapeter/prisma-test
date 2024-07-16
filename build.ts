import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

console.log('✨ BUILD SCRIPT')

const run = async () => {
  const user = await prisma.user.upsert({
    where: {email: 'alice@prisma.io'},
    update: {},
    create: {
      name: 'Body Builder Alice',
      email: 'body-builder-alice@prisma.io',
    },
  })
  console.log(user)
}

run().then(() => process.exit(0)).catch(err => {
  console.error(err)
  process.exit(1)
})