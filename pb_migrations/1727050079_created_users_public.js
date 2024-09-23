/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xkab7j0umvu929j",
    "created": "2024-09-23 00:07:59.242Z",
    "updated": "2024-09-23 00:07:59.242Z",
    "name": "users_public",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkcdqusa",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, username FROM users"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xkab7j0umvu929j");

  return dao.deleteCollection(collection);
})
