import * as postgresql from "@pulumi/postgresql";

const myDb = new postgresql.Database("my-database");
