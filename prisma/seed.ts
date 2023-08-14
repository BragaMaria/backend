import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  let users = [
    {
      email: "abs@yandex.ru",
      name: "Masha",
      surname: "Braga",
    },
    {
      email: "bds@yandex.ru",
      name: "Evgeniy",
      surname: "Braga",
    },
    {
      email: "frt@yandex.ru",
      name: "Mark",
      surname: "Braga",
    },
    {
      email: "jsk@yandex.ru",
      name: "Artem",
      surname: "Braga",
    },
  ];
  await Promise.all(
    users.map(async (user) => {
      await prisma.user.create({
        data: user,
      });
    }),
  );
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
