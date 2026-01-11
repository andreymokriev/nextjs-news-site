import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const newsData = [
        {
            header: "Sick_and_Tired_of_Snow",
            content: "A Fargo, North Dakota, man was arrested for clearing snow with a flamethrower.",
            image: "1",
            date: "2024-11-20",
        },
        {
            header: "Canadian_grandma_breaks_world_record_for_pushups",
            content: "DonnaJean Wilde, 59, of Beazer, Alberta, took on the title for the most pushups in one hour (female) and managed to surpass the previous record with 17 minutes of her attempt remaining. 'I had to fight back the happy tears and emotions and keep going,' Wilde told Guinness World Records. 'I still felt quite strong and I was aiming for a high number of push ups to complete in the next 17 minutes.'",
            image: "2",
            date: "2024-11-21",
        },
        {
            header: "Officials_seek_emu_on_the_loose_in_Arkansas_village",
            content: "Nov. 20 (UPI) -- An Arkansas animal control department is asking members of the public to keep an eye out for an emu spotted wandering loose in Hot Springs Village. Hot Springs Village Animal Control said on social media that the large Australian bird was spotted 'wandering around the east side of the village, close to the Balboa Gate.'",
            image: "3",
            date: "2024-11-22",
        }
    ];

    for (const news of newsData) {
        // Проверяем, существует ли новость с таким заголовком
        const existingNews = await prisma.newstable.findFirst({
            where: { header: news.header },
        });

        // Если новость не найдена, добавляем ее
        if (!existingNews) {
            await prisma.newstable.create({
                data: news,
            });
            console.log("Added news: ${news.header}");
        } else {
            console.log("News already exists: ${news.header}");
        }
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
