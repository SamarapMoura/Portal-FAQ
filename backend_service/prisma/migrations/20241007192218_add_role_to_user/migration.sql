-- CreateEnum
CREATE TYPE "Role" AS ENUM ('administrator', 'user');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
