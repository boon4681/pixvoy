/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8uq7m1ak7920ihr",
    "created": "2024-09-23 01:34:09.615Z",
    "updated": "2024-09-23 01:34:09.615Z",
    "name": "image_post_tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "55gmtbss",
        "name": "post",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vmbu5gn024k2ebt",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "a0vwpipj",
        "name": "tag",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3zaao79mgrwj307",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_oGAqQg1` ON `image_post_tags` (\n  `post`,\n  `tag`\n)"
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
  const collection = dao.findCollectionByNameOrId("8uq7m1ak7920ihr");

  return dao.deleteCollection(collection);
})
