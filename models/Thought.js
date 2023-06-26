const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const formatDate = require("../utils/formatDate");

const thoughtsSchema = new Schema(
  {
    // thoughtsId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // line 20 get
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our Thought model
const Thought = model("thought", thoughtsSchema);

module.exports = Thought;
