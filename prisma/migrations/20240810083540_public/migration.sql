/*
  Warnings:

  - Added the required column `name` to the `coordinates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coordinates" ADD COLUMN     "name" TEXT NOT NULL;
