import { PersonTable, PetTable } from "@/db/types";
import { createKysely } from "@vercel/postgres-kysely";

interface Database {
  person: PersonTable;
  pet: PetTable;
}

const db = createKysely<Database>();

async function main() {
  const pet = await db.selectFrom("pet").executeTakeFirst();
  console.log({ pet });
}

main()
  .then(() => console.log("query script finished"))
  .catch((e) => console.error(e));
