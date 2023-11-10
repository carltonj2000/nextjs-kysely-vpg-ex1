import { PersonTable, PetTable } from "@/db/types";
import { createKysely } from "@vercel/postgres-kysely";

interface Database {
  person: PersonTable;
  pet: PetTable;
}

const db = createKysely<Database>();

async function main() {
  await db
    .insertInto("pet")
    .values({ name: "Catto", species: "cat", owner_id: 1 })
    .execute();
}

main()
  .then(() => console.log("insert script finished"))
  .catch((e) => console.error(e));
