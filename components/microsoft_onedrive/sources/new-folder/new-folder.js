const base = require("../new-file/new-file");

module.exports = {
  ...base,
  type: "source",
  key: "microsoft_onedrive-new-folder",
  name: "New Folder in Folder (Instant)",
  description: "Emit new event when a new folder is created in a OneDrive drive",
  version: "0.0.1",
  dedupe: "unique",
  methods: {
    ...base.methods,
    isItemTypeRelevant(driveItem) {
      return (
        !!driveItem.folder &&
        base.methods.isItemTypeRelevant.call(this, driveItem)
      );
    },
  },
};