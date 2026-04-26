# Schema.prisma
```js
generator client {
  //make sure to add js in prisma-client-js, not primsa-client, Without this, PrismaClient will be broken → $connect missing
  provider = "prisma-client-js"
  //make sure to add this if prisma client doesnt generate
  output   = "../node_modules/.prisma/client"
}
```

# main.ts

```js
//should import dotenv in main.ts
import * as dotenv from 'dotenv';
dotenv.config();

// Swagger configuration in main.ts
  const config = new DocumentBuilder()
    .setTitle('Product CRUD API')
    .setDescription('Simple product management system')
    .setVersion('1.0')
    .addTag('products')
    .build();
```
# prisma service.ts
```bash
npm install @prisma/adapter-pg pg
```
```js
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
//npm install @prisma/adapter-pg pg                                                  
//npm install -D @types/pg
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const adapter = new PrismaPg({
          
            //should need this connection string 
            connectionString: String(process.env.DATABASE_URL), 
        });
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}
```

# prisma config.ts
```js
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
```

