-- CreateTable
CREATE TABLE "compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_senderID" TEXT NOT NULL,
    "user_receiveID" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    CONSTRAINT "compliments_user_senderID_fkey" FOREIGN KEY ("user_senderID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_user_receiveID_fkey" FOREIGN KEY ("user_receiveID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
