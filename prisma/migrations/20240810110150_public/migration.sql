/*
  Warnings:

  - You are about to drop the column `time` on the `User` table. All the data in the column will be lost.
  - Added the required column `starttime` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "time",
ADD COLUMN     "endtime" TIMESTAMP(3),
ADD COLUMN     "starttime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "username" DROP NOT NULL;
