import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import Store from "@ember-data/store";

module("Unit | Model | element text", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store") as Store;
    const model = store.createRecord("element-text", {});
    assert.ok(model);
  });
});