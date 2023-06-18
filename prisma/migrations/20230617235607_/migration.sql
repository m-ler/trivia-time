-- CreateTable
CREATE TABLE "Profile" (
    "userId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "negativeScore" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customImage" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
