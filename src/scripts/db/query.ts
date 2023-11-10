import { PersonTable, PetTable } from "@/db/types";
import { createKysely } from "@vercel/postgres-kysely";

interface Database {
  person: PersonTable;
  pet: PetTable;
}

const db = createKysely<Database>();

async function main() {
  const person = await db
    .selectFrom("person")
    .innerJoin("pet", "pet.owner_id", "person.id")
    .select(["first_name", "pet.name as pet_name"])
    .where("person.id", "=", 1)
    .executeTakeFirst();
}

main()
  .then(() => console.log("query script finished"))
  .catch((e) => console.error(e));
