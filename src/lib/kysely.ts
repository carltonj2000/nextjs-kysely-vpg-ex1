import { createKysely } from "@vercel/postgres-kysely";

interface PetTable {
  name: string;
  owner: string;
}

// Keys of this interface are table names.
export interface Database {
  pets: PetTable;
}

export const db = createKysely<Database>();
export { sql } from "kysely";
