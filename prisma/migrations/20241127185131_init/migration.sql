-- CreateTable
CREATE TABLE "Newstable" (
    "id" SERIAL NOT NULL,
    "header" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "date" TEXT NOT NULL,

    CONSTRAINT "Newstable_pkey" PRIMARY KEY ("id")
);
