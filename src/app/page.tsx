import { db } from "@/lib/kysely";

export default async function Home() {
  let pets = null;
  try {
    pets = await db.selectFrom("pets").selectAll().execute();
  } catch (e: any) {
    if (e.message === `relation "pets" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      // await seed();
      // pets = await db.selectFrom("pets").selectAll().execute();
    } else {
      throw e;
    }
  }
  if (pets) {
    return (
      <main>
        <code>{JSON.stringify(pets, null, 2)}</code>
      </main>
    );
  } else {
    return (
      <main>
        <h1>hi</h1>
      </main>
    );
  }
}
