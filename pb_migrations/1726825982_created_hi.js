/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2g6q9do2164ksyo",
    "created": "2024-09-20 09:53:02.574Z",
    "updated": "2024-09-20 09:53:02.574Z",
    "name": "hi",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hdbuvtd2",
        "name": "name",
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
      "query": "SELECT id,name FROM users"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2g6q9do2164ksyo");

  return dao.deleteCollection(collection);
})
