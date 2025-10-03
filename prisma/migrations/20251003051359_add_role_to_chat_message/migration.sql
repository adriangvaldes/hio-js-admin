/*
  Warnings:

  - Changed the type of `sender` on the `ChatMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "sender",
ADD COLUMN     "sender" "Role" NOT NULL;
