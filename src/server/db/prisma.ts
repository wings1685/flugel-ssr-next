import { PrismaClient } from "#prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

declare global {
	var prisma: PrismaClient | undefined;
}

const adapter = new PrismaMariaDb({
	host: "localhost",
	user: "root",
	database: "flugel",
});

export const getPrisma = (): PrismaClient => {
	if (!global.prisma) {
		global.prisma = new PrismaClient({ adapter });
	}
	return global.prisma;
};

export const globalPrisma = getPrisma();
