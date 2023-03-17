-- CreateTable
CREATE TABLE "Terefas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Terefas_id_key" ON "Terefas"("id");
