/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2g5ici01g380dbs",
    "created": "2024-09-20 14:55:50.883Z",
    "updated": "2024-09-20 14:55:50.883Z",
    "name": "image_post_tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ydpbanuc",
        "name": "image_post_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vmbu5gn024k2ebt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dsxglz7k",
        "name": "tag_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3zaao79mgrwj307",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_jMBXnFJ` ON `image_post_tags` (\n  `tag_id`,\n  `image_post_id`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2g5ici01g380dbs");

  return dao.deleteCollection(collection);
})
