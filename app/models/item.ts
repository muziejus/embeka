import Model, {
  attr,
  belongsTo,
  hasMany,
  AsyncHasMany,
} from "@ember-data/model";
import Tag from "emb-line/models/tag";
import ElementText from "emb-line/models/element-text";
import User from "emb-line/models/user";
import Collection from "emb-line/models/collection";
import ItemType from "emb-line/models/item-type";

export default class ItemModel extends Model {
  @attr declare featured?: boolean;
  @attr declare public?: boolean;
  @attr declare added: string;
  @attr declare modified: string;

  @hasMany("tag") declare tags: AsyncHasMany<Tag>;
  @hasMany("elementText") declare elementTexts: AsyncHasMany<ElementText>;

  @belongsTo("collection", { async: false }) declare collection: Collection;
  @belongsTo("user", { async: false }) declare owner: User;
  @belongsTo("itemType", { async: false }) declare itemType: ItemType;
}

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    item: ItemModel;
  }
}