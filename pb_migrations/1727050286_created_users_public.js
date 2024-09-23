/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "92az4kz9atzyzdf",
    "created": "2024-09-23 00:11:26.083Z",
    "updated": "2024-09-23 00:11:26.083Z",
    "name": "users_public",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iodwlm2i",
        "name": "username",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l0xukrql",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, username, email FROM users"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("92az4kz9atzyzdf");

  return dao.deleteCollection(collection);
})
