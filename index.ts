import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  setInterval(async () => {
    try {
      const user = await prisma.user.upsert({
        where: {email: 'alice@prisma.io'},
        update: {},
        create: {
          name: 'Alice',
          email: 'alice@prisma.io',
        },
      })
      console.log(user)
    } catch (e) {
      console.log('failed to fetch ')
      console.log(e)
    }
  }, 2000)
}

main()